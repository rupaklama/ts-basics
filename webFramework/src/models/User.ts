import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// A Composition-Based approach where Class has reference to another Object for reusable & flexible code
// & to do the Delegation, where one class delegates another one to do something
export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
