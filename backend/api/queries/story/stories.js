import {
  getAllStories,
  getPrimayStories,
  getRecentStories,
  getStories,
} from "../../../shared/db/queries/story";

export const allStories = (_, __, { db }) => {
  return getAllStories(db)();
};

export const primaryStories = (_, __, { db }) => {
  return getPrimayStories(db)();
};

export const recentStories = (_, __, { db }) => {
  return getRecentStories(db)();
};

export const stories = (_, { first, after }, { db }) => {
  return getStories(db, first, after)();
};
