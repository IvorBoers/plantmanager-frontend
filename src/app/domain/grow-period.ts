import {Entity} from "./entity";
import {WeekOfMonth} from "./week-of-month";

export class GrowPeriod implements Entity {

  id!: number
  start = new WeekOfMonth
  end = new WeekOfMonth
  phase!: string
  description?: string
}
