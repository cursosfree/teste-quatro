(() => {
  try {
    const distribution = {"installation":"6fb5331e-099e-4d7e-962b-c4f595ff72a5","version":1,"paths":{"runtime.js":"a.js","core.js":"b.js","fallback.js":"c.js","observe":"e","observe/fallback":"f","entry-decision":"g","cta-refresh":"h","observed-session":"j","observed-action":"k","html.gif":"m.gif","css.gif":"n.gif","cta-inventory.js":"p.js"},"bases":{"SCRIPT":"https://protect.leoceo.online/r/v2/86cb7a6d-0470-4d27-a445-891025b58030/","STATIC_ASSETS":"https://protect.leoceo.online/r/v2/977e0caf-f640-45f7-a09f-cffef31879f5/","TELEMETRY":"https://protect.leoceo.online/r/v2/118edce9-8025-4eb7-8a8f-40626eba8aca/"}};
    const source = document.currentScript && document.currentScript.src;
    if (!source) return;
    const scoped = !!distribution || new URL(source).pathname.startsWith('/i/');
    fetch(new URL(distribution?.paths?.['observe/fallback'] ?? 'observe/fallback', distribution ? distribution.bases.TELEMETRY : source).href, {
      method: 'POST', headers: { 'Content-Type': 'text/plain' },
      body: scoped ? JSON.stringify({origin:location.origin,pathname:location.pathname}) : location.origin, keepalive: true
    }).catch(() => {});
  } catch (_) { /* Observation is best effort. */ }
})();
