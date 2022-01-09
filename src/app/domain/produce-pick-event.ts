import {Event} from "./event";
import {Plant} from "./plant";

export class ProducePickEvent implements Event {
  typeName = 'ProducePickEvent'
  id!: number
  date!: Date
  description = ""
  plant!: Plant
  imageId?: number
  count: number = 0
  weight: number = 0.0
}
