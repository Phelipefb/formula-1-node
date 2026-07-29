import { Driver, DriverInput, Team } from "../interfaces/driver.interface";
import { DriverRepository } from "../repositories/driver.repository";

export class DriverService {
  constructor(
    private readonly repository: DriverRepository = new DriverRepository(),
  ) {}

  listDrivers(): Driver[] {
    return this.repository.findAll();
  }

  getDriverById(id: number): Driver | undefined {
    return this.repository.findById(id);
  }

  listTeams(): Team[] {
    return this.repository.getTeams();
  }

  createDriver(driverData: DriverInput): Driver {
    if (!driverData.name || !driverData.team || !driverData.country) {
      throw new Error("Name, team and country are required");
    }

    return this.repository.create(driverData);
  }

  updateDriver(
    id: number,
    driverData: Partial<DriverInput>,
  ): Driver | undefined {
    return this.repository.update(id, driverData);
  }

  deleteDriver(id: number): boolean {
    return this.repository.delete(id);
  }
}
