import { TableClient, odata } from "@azure/data-tables";

export default async function (context, req) {
  try {
    const { name = "", email = "", rating, comments = "" } = req.body || {};
    if (!email || !comments || !rating) {
      return (context.res = { status: 400, jsonBody: { message: "Missing required fields." } });
    }
    const conn = process.env.STORAGE_CONNECTION_STRING; // set in SWA env vars
    const tableName = process.env.TABLE_NAME || "Feedback";
    const client = TableClient.fromConnectionString(conn, tableName);

    const entity = {
      partitionKey: "fb",
      rowKey: cryptoRandom(),
      name, email,
      rating: Number(rating),
      comments,
      submittedAt: new Date().toISOString()
    };
    await client.createEntity(entity);

    context.res = { status: 200, jsonBody: { message: "Thank you for your feedback!" } };
  } catch (err) {
    context.log("Error:", err.message);
    context.res = { status: 500, jsonBody: { message: "Server error" } };
  }
}
function cryptoRandom() { return Math.random().toString(36).slice(2) + Date.now(); }
