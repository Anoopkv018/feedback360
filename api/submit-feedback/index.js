const { TableClient } = require("@azure/data-tables");

module.exports = async function (context, req) {
  try {
    if (req.method === "OPTIONS") { context.res = { status: 204 }; return; }
    if (req.method === "GET")     { context.res = { status: 200, jsonBody: { ok:true } }; return; }

    const { name = "", email = "", rating, comments = "" } = req.body || {};

    const conn = process.env.STORAGE_CONNECTION_STRING;
    const tableName = process.env.TABLE_NAME || "Feedback";
    if (!conn)     throw new Error("Missing env: STORAGE_CONNECTION_STRING");
    if (!tableName)throw new Error("Missing env: TABLE_NAME");

    const client = TableClient.fromConnectionString(conn, tableName);
    try { await client.createTable(); } catch { /* already exists */ }

    await client.createEntity({
      partitionKey: "fb",
      rowKey: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      name, email, rating: Number(rating), comments,
      submittedAt: new Date().toISOString()
    });

    context.res = { status: 200, jsonBody: { message: "Thank you for your feedback!" } };
  } catch (err) {
    context.log("submit-feedback error:", err);
    context.res = { status: 500, jsonBody: { message: "Storage error", detail: String(err && err.message || err) } };
  }
};
