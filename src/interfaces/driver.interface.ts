export interface Driver {
  id: number;
  name: string;
  team: string;
  number: number;
  country: string;
  championships: number;
  age: number;
}

export interface DriverInput {
  name: string;
  team: string;
  number: number;
  country: string;
  championships: number;
  age: number;
}

export interface Team {
  id: number;
  name: string;
  base: string;
}
