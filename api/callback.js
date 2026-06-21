function cookieValue(cookieHeader, name) {
  return String(cookieHeader || '')
    .split(';')
    .map(part => part.trim().split('='))
    .find(([key]) => key === name)?.[1];
}

function popupResponse(origin, status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html><html><body><script>
    if (window.opener) window.opener.postMessage(${JSON.stringify(message)}, ${JSON.stringify(origin)});
    window.close();
  </script><p>GitHub authorization ${status}. You may close this window.</p></body></html>`;
}

export default async function handler(request, response) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const { code, state, error } = request.query;
  const expectedState = cookieValue(request.headers.cookie, 'decap_oauth_state');
  const host = request.headers['x-forwarded-host'] || request.headers.host;
  const protocol = request.headers['x-forwarded-proto'] || 'https';
  const origin = `${protocol}://${host}`;

  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('Set-Cookie', 'decap_oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');

  if (!clientId || !clientSecret) {
    response.status(500).send(popupResponse(origin, 'error', 'Missing GitHub OAuth environment variables'));
    return;
  }

  if (error || !code || !state || state !== expectedState) {
    response.status(400).send(popupResponse(origin, 'error', error || 'Invalid OAuth state'));
    return;
  }

  try {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
    });
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok || !tokenData.access_token) throw new Error(tokenData.error_description || 'GitHub token exchange failed');
    response.status(200).send(popupResponse(origin, 'success', { token: tokenData.access_token, provider: 'github' }));
  } catch (oauthError) {
    response.status(500).send(popupResponse(origin, 'error', oauthError.message));
  }
}
