import crypto from 'node:crypto';

function handshakePage(origin, authorizeUrl) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>Authorizing with GitHub</title></head>
<body>
  <p>Connecting to GitHub…</p>
  <script>
    const origin = ${JSON.stringify(origin)};
    const authorizeUrl = ${JSON.stringify(authorizeUrl)};
    function continueAuthorization(event) {
      if (event.origin === origin && event.data === 'authorizing:github') {
        window.removeEventListener('message', continueAuthorization);
        window.location.assign(authorizeUrl);
      }
    }
    window.addEventListener('message', continueAuthorization);
    if (window.opener) window.opener.postMessage('authorizing:github', origin);
  </script>
</body>
</html>`;
}

export default function handler(request, response) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    response.status(500).send('Missing GITHUB_CLIENT_ID');
    return;
  }

  const state = crypto.randomBytes(24).toString('hex');
  const host = request.headers['x-forwarded-host'] || request.headers.host;
  const protocol = request.headers['x-forwarded-proto'] || 'https';
  const origin = `${protocol}://${host}`;

  if (request.query.step !== 'authorize') {
    const authorizeUrl = new URL('/api/auth', origin);
    for (const [key, value] of Object.entries(request.query)) {
      if (typeof value === 'string') authorizeUrl.searchParams.set(key, value);
    }
    authorizeUrl.searchParams.set('step', 'authorize');
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.status(200).send(handshakePage(origin, authorizeUrl.toString()));
    return;
  }

  const callback = `${protocol}://${host}/api/callback`;
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', clientId);
  authorize.searchParams.set('redirect_uri', callback);
  authorize.searchParams.set('scope', 'repo,user');
  authorize.searchParams.set('state', state);

  response.setHeader('Set-Cookie', `decap_oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
  response.redirect(302, authorize.toString());
}
