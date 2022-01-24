import {Event} from "./event";

export class BuyEvent implements Event {

  typeName = "BuyEvent"

  id!: number
  plantId!: number
  date!: Date
  description = ""
  price!: number
  store!: string
}
