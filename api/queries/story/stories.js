import {
  getAllStories,
  getStoryById,
  getPrimayStories,
  getEditorStories,
  getRecentStories,
  getStories,
} from "../../../shared/db/queries/story";

export const allStories = (_, __, { db }) => {
  return getAllStories(db)();
};

export const storyById = (_, { ID }, { db }) => {
  return getStoryById(db, ID)();
};

export const primaryStories = (_, __, { db }) => {
  return getPrimayStories(db)();
};

export const editorStories = (_, __, { db }) => {
  return getEditorStories(db)();
};

export const recentStories = (_, __, { db }) => {
  return getRecentStories(db)();
};

export const stories = (_, { first, after }, { db }) => {
  return getStories(db, first, after)();
};
