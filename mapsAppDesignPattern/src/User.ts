import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// note - 'implements' is to implement Interface in class
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = "red";

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  displayPopupContent(): string {
    return `User Name: ${this.name}`;
  }
}
