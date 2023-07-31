import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
config();
const urlDb = process.env.DB_URL;
const dbName = process.env.DB_NAME;
export const client = new MongoClient(urlDb);
async function connectDb() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;
}
export const db = await connectDb()


