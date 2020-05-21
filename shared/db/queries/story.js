import { createReadQuery } from "../create-query";
import { ObjectId } from "mongodb";

export const getAllStories = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({})
      .toArray()
      .then((res) => res),
  }));

export const getStoryById = (db, ID) =>
  createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({ _id: ObjectId(ID) })
      .toArray()
      .then((res) => res[0]),
  }));

export const getPrimayStories = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({ isPrimary: true })
      .sort({ _id: -1 })
      .limit(5)
      .toArray()
      .then((res) => res),
  }));

export const getRecentStories = (db) =>
  createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({ isPrimary: false })
      .sort({ id: -1 })
      .toArray()
      .then((res) => res),
  }));

export const getStories = (db, first, after) => {
  let endCursor = null;
  let cursorNumeric = Buffer.from(after, "base64").toString("ascii");
  if (!cursorNumeric) cursorNumeric = 0;
  return createReadQuery(() => ({
    query: db
      .collection("stories")
      .find({
        isPrimary: false,
        _id: { $gt: ObjectId(cursorNumeric) },
      })
      .limit(first)
      .toArray()
      .then((res) => ({
        edges: res.map((story, index) => {
          if (index === res.length - 1) {
            endCursor = Buffer.from(story._id.toString()).toString("base64");
            return {
              cursor: endCursor,
              node: story,
            };
          }
          return {
            cursor: Buffer.from(story._id.toString()).toString("base64"),
            node: story,
          };
        }),
        pageInfo: {
          endCursor: endCursor,
          hasNextPage: new Promise((resolve, reject) => {
            db.collection("stories")
              .find({
                isPrimary: false,
                _id: {
                  $gt: ObjectId(
                    Buffer.from(endCursor, "base64").toString("ascii")
                  ),
                },
              })
              .count((err, count) => {
                if (count > 0) resolve(true);
                else resolve(false);
              });
          }),
        },
      })),
  }));
};
