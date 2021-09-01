import express from "express";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { BookResolver } from "./resolvers/book.resolvers";
import { buildSchema } from "type-graphql";

export async function startServer() {
  const app = express();

  // Apollo server
  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [BookResolver] }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  return app;
}
