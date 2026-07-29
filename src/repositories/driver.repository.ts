import { Driver, DriverInput, Team } from "../interfaces/driver.interface";

const initialTeams: Team[] = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
  { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" },
  { id: 11, name: "Uralkali Haas F1 Team", base: "Banbury, United Kingdom" },
  { id: 12, name: "Scuderia Toro Rosso", base: "Faenza, Italy" },
];

const initialDrivers: Driver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    number: 1,
    country: "Netherlands",
    championships: 4,
    age: 28,
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Ferrari",
    number: 44,
    country: "United Kingdom",
    championships: 7,
    age: 41,
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
    number: 4,
    country: "United Kingdom",
    championships: 0,
    age: 26,
  },
  {
    id: 4,
    name: "Charles Leclerc",
    team: "Ferrari",
    number: 16,
    country: "Monaco",
    championships: 0,
    age: 28,
  },
  {
    id: 5,
    name: "Oscar Piastri",
    team: "McLaren",
    number: 81,
    country: "Australia",
    championships: 1,
    age: 25,
  },
  {
    id: 6,
    name: "George Russell",
    team: "Mercedes",
    number: 63,
    country: "United Kingdom",
    championships: 0,
    age: 28,
  },
  {
    id: 7,
    name: "Fernando Alonso",
    team: "Aston Martin",
    number: 14,
    country: "Spain",
    championships: 2,
    age: 45,
  },
  {
    id: 8,
    name: "Carlos Sainz",
    team: "Williams",
    number: 55,
    country: "Spain",
    championships: 0,
    age: 32,
  },
  {
    id: 9,
    name: "Pierre Gasly",
    team: "Alpine",
    number: 10,
    country: "France",
    championships: 0,
    age: 30,
  },
  {
    id: 10,
    name: "Alexander Albon",
    team: "Williams",
    number: 23,
    country: "Thailand",
    championships: 0,
    age: 30,
  },
];

export class DriverRepository {
  private readonly teams: Team[] = initialTeams.map((team) => ({ ...team }));
  private readonly drivers: Driver[] = initialDrivers.map((driver) => ({
    ...driver,
  }));

  create(driverData: DriverInput): Driver {
    const newDriver: Driver = {
      id: this.generateId(),
      ...driverData,
    };

    this.drivers.push(newDriver);
    return newDriver;
  }

  findById(id: number): Driver | undefined {
    return this.drivers.find((driver) => driver.id === id);
  }

  findAll(): Driver[] {
    return this.drivers;
  }

  findByNameAndTeam(name: string, team: string): Driver | undefined {
    return this.drivers.find(
      (driver) =>
        driver.name.toLowerCase() === name.toLowerCase() &&
        driver.team.toLowerCase() === team.toLowerCase(),
    );
  }

  update(id: number, driverData: Partial<DriverInput>): Driver | undefined {
    const index = this.drivers.findIndex((driver) => driver.id === id);

    if (index === -1) {
      return undefined;
    }

    this.drivers[index] = { ...this.drivers[index], ...driverData };
    return this.drivers[index];
  }

  delete(id: number): boolean {
    const index = this.drivers.findIndex((driver) => driver.id === id);

    if (index === -1) {
      return false;
    }

    this.drivers.splice(index, 1);
    return true;
  }

  getTeams(): Team[] {
    return this.teams;
  }

  private generateId(): number {
    const maxId = this.drivers.reduce(
      (highest, driver) => Math.max(highest, driver.id),
      0,
    );
    return maxId + 1;
  }
}
