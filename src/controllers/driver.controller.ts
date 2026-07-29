import { FastifyReply, FastifyRequest } from "fastify";
import { DriverInput } from "../interfaces/driver.interface";
import { DriverService } from "../services/driver.service";

export class DriverController {
  constructor(private readonly service: DriverService = new DriverService()) {}

  listTeams = async (_request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).type("application/json");
    return { teams: this.service.listTeams() };
  };

  listDrivers = async (_request: FastifyRequest, reply: FastifyReply) => {
    reply.code(200).type("application/json");
    return { drivers: this.service.listDrivers() };
  };

  getDriver = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) => {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      reply.code(400).type("application/json");
      return { message: "Invalid driver id" };
    }

    const driver = this.service.getDriverById(id);

    if (!driver) {
      reply.code(404).type("application/json");
      return { message: "Driver Not Found" };
    }

    reply.code(200).type("application/json");
    return { driver };
  };

  createDriver = async (
    request: FastifyRequest<{ Body: DriverInput }>,
    reply: FastifyReply,
  ) => {
    try {
      const driver = this.service.createDriver(request.body);
      reply.code(201).type("application/json");
      return { driver };
    } catch (error) {
      reply.code(400).type("application/json");
      return {
        message: error instanceof Error ? error.message : "Invalid driver data",
      };
    }
  };

  updateDriver = async (
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<DriverInput>;
    }>,
    reply: FastifyReply,
  ) => {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      reply.code(400).type("application/json");
      return { message: "Invalid driver id" };
    }

    const driver = this.service.updateDriver(id, request.body);

    if (!driver) {
      reply.code(404).type("application/json");
      return { message: "Driver Not Found" };
    }

    reply.code(200).type("application/json");
    return { driver };
  };

  deleteDriver = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) => {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      reply.code(400).type("application/json");
      return { message: "Invalid driver id" };
    }

    const deleted = this.service.deleteDriver(id);

    if (!deleted) {
      reply.code(404).type("application/json");
      return { message: "Driver Not Found" };
    }

    reply.code(200).type("application/json");
    return { message: "Driver deleted" };
  };
}
