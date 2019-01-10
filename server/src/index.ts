import "reflect-metadata";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./createSchema";
import { createTypeormConn } from "./createTypeormConn";
// import { setupData } from "./setupData";

const startServer = async () => {
  await createTypeormConn();
  // await setupData();

  const app = express();

  const server = new ApolloServer({ schema: createSchema() });
  server.applyMiddleware({ app });

  const port = 4000;
  app.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
    ),
  );
};

startServer();
