import {Event} from "./event";

export class BuyEvent implements Event {
  id!: number
  date!: Date
  description = ""
  price!: number
  store!: string
}
