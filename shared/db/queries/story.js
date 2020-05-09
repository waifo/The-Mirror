import { createReadQuery } from "../create-query";

export const getAllStories = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({})
      .toArray()
      .then((res) => res),
  }));

export const getPrimayStories = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({ isPrimary: true })
      .toArray()
      .then((res) => res[0]),
  }));
