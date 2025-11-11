module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') { context.res = { status: 204 }; return; }

  if (req.method === 'GET') {               // quick wiring check
    context.res = { status: 200, body: "submit-feedback is up" };
    return;
  }

  // minimal POST handler (no storage yet)
  try {
    const body = req.body || {};
    context.res = { status: 200, jsonBody: { ok: true, echo: body } };
  } catch (e) {
    context.res = { status: 500, jsonBody: { ok: false, error: String(e) } };
  }
};
