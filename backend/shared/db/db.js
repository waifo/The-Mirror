import { MongoClient, Server } from "mongodb";
import Debug from "debug";

const debug = Debug("shared:db");
const url = process.env.MONGO_URL;
let db = null;
export const connectMongoDB = () => {
  if (db) {
    return db;
  }
  return MongoClient.connect(url)
    .then((client) => {
      debug("connected successfully to mongodb", client);
      return (db = client.db(process.env.DB_NAME));
    })
    .catch((error) => debug(`Error connecting to mongodb ${error}`));
};
