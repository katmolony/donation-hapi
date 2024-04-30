import { Db } from "../types/store-types";
import { connectMongo } from "./mongo/connect.js";

export const db: Db = {
  userStore: null,
  candidateStore: null,
  donationStore: null,
};

export function connectDb(dbType: string) {
  switch (dbType) {
    case "mongo":
      connectMongo(db);
      break;
    default:
  }
}