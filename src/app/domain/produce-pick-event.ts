import {Event} from "./event";

export class ProducePickEvent implements Event {
  typeName = 'ProducePickEvent'
  id!: number
  date!: Date
  description = ""
  plantId!: number
  imageId?: number
  count: number = 0
  weight: number = 0.0
}
