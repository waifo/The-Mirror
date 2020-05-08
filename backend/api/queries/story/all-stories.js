import { getAllStories } from "../../../shared/db/queries/story";

export default (_, __, { db }) => {
  return getAllStories(db)();
};
