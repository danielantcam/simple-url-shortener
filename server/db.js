import "./config.js";
import { Client } from "pg";

const db = new Client(process.env.DATABASE_URL);

await db.connect();

export default db;