module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') { context.res = { status: 204 }; return; } // preflight
  if (req.method === 'GET') { context.res = { status: 200, jsonBody: { ok: true } }; return; }

  try {
    const { name = "", email = "", rating, comments = "" } = req.body || {};
    if (!email || !comments || !rating) {
      context.res = { status: 400, jsonBody: { message: "Missing required fields." } };
      return;
    }
    context.res = { status: 200, jsonBody: { message: "Thank you for your feedback!" } };
  } catch (e) {
    context.res = { status: 500, jsonBody: { message: "Server error", detail: String(e) } };
  }
};
