import {Entity} from "./entity";

export interface Event extends Entity {
  readonly typeName: string;
  date: Date
  description: string

}
