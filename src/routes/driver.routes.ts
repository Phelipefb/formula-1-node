import { FastifyInstance } from "fastify";
import { DriverController } from "../controllers/driver.controller";

export async function driverRoutes(server: FastifyInstance) {
  const controller = new DriverController();

  server.get("/teams", controller.listTeams);
  server.get("/drivers", controller.listDrivers);
  server.get("/drivers/:id", controller.getDriver);
  server.post("/drivers", controller.createDriver);
  server.put("/drivers/:id", controller.updateDriver);
  server.delete("/drivers/:id", controller.deleteDriver);
}
