import Debug from "debug";
import {
  makeExecutableSchema,
  addSchemaLevelResolveFunction,
} from "graphql-tools";
import { merge } from "lodash";

import { User, Story } from "../types";
import UserQueries from "../queries/user";
import StoryQueries from "../queries/story";

const debug = Debug("api:schema");
debug("creating schema for graphql");

const IS_PROD = process.env.NODE_ENV === "production";

const ROOT = `
type Query{
    dummy:String
}
type Mutation{
    dummy:String
}
schema{
    query:Query
    mutation:Mutation
}
`;

const resolvers = merge({}, UserQueries, StoryQueries);

const schema = makeExecutableSchema({
  typeDefs: [ROOT, User, Story],
  resolvers,
});

export default schema;
