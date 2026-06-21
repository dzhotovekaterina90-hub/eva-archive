import crypto from 'node:crypto';

export default function handler(request, response) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    response.status(500).send('Missing GITHUB_CLIENT_ID');
    return;
  }

  const state = crypto.randomBytes(24).toString('hex');
  const host = request.headers['x-forwarded-host'] || request.headers.host;
  const protocol = request.headers['x-forwarded-proto'] || 'https';
  const callback = `${protocol}://${host}/api/callback`;
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', clientId);
  authorize.searchParams.set('redirect_uri', callback);
  authorize.searchParams.set('scope', 'repo,user');
  authorize.searchParams.set('state', state);

  response.setHeader('Set-Cookie', `decap_oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`);
  response.redirect(302, authorize.toString());
}
