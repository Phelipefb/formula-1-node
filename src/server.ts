import fastify from "fastify";
import cors from "@fastify/cors";
import { driverRoutes } from "./routes/driver.routes";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

server.register(driverRoutes);

server.listen({ port: Number(process.env.PORT ?? 3333) }, () => {
  console.log("Server init");
});
