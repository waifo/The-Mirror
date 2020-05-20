import express from "express";
import compression from "compression";
import Debug from "debug";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import cors from "cors";
import * as Sentry from "@sentry/node";

import config from "../webpack.config.js";
import apolloServer from "./apolloServer";
import { connectMongoDB } from "../shared/db/db";

const debug = Debug("api");
debug("logging with debug enabled :-)");
debug("Starting Server <-->");

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const compiler = webpack(config);

process.env === "production"
  ? Sentry.init({ dsn: process.env.SENTRY_DSN })
  : null;

process.env === "production" ? app.use(Sentry.Handlers.requestHandler()) : null;
app.use(cors());
app.use(compression());
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile("index.html"));
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

connectMongoDB().then((db) => {
  debug(`connection db object ${db}`);
  apolloServer.applyMiddleware({ app, path: process.env.PLAYGROUND_URL });
  (apolloServer.context = ({ req, res }) => {
    return {
      req,
      db,
    };
  }),
    app.listen(port, () => debug(`GraphQL Server running on port ${port}/api`));
});

if (process.env === "production") {
  app.use(Sentry.Handlers.errorHandler());
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });
}
