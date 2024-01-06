import { ObjectId } from "mongodb";
import "server-only";
import DbConnect from "./DbConnect";

export const getProductsFromDb = async (cid) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = {};
  if (cid) {
    query.cid = cid;
  }
  return productsCollection.find(query).toArray();
};

export const getProductByIdFromDb = async (id) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const query = {
    _id: new ObjectId(id),
  };
  return productsCollection.findOne(query);
};

export const getProductsByIdsFromDb = async (ids = []) => {
  const db = await DbConnect();
  const productsCollection = db.collection("products");
  const idsWithObjectId = ids.map((id) => new ObjectId(id));
  const query = {
    _id: { $in: idsWithObjectId },
  };
  return productsCollection.find(query).toArray();
};
