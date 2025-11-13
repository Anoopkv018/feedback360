const { TableClient } = require("@azure/data-tables");

module.exports = async function (context, req) {
  // CORS preflight
  if (req.method === "OPTIONS") { context.res = { status: 204 }; return; }

  if (req.method === "GET") {
    context.res = { status: 200, jsonBody: { ok: true } };
    return;
  }

  try {
    const { name = "", email = "", rating, comments = "" } = req.body || {};
    if (!email || !comments || !rating) {
      context.res = { status: 400, jsonBody: { message: "Missing required fields." } };
      return;
    }

    const conn = process.env.STORAGE_CONNECTION_STRING;
    const tableName = process.env.TABLE_NAME || "feedback";
    const client = TableClient.fromConnectionString(conn, tableName);

    const entity = {
      partitionKey: "fb",
      rowKey: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      name,
      email,
      rating: Number(rating),
      comments,
      submittedAt: new Date().toISOString()
    };

    await client.createEntity(entity);
    context.res = { status: 200, jsonBody: { message: "Thank you for your feedback!" } };
  } catch (err) {
    context.log("submit-feedback error:", err);
    context.res = { status: 500, jsonBody: { message: "Server error", detail: String(err) } };
  }
};
