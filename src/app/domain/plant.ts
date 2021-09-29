import {Entity} from "./entity";
import {PlantSpecies} from "./plant-species";
import {BuyEvent} from "./buy-event";
import {SeedStartEvent} from "./seed-start-event";
import {PlantDiedEvent} from "./plant-died-event";
import {ProducePickEvent} from "./produce-pick-event";

export class Plant implements Entity {
  id!: number;
  plantSpecies!: PlantSpecies;
  buyEvent?: BuyEvent;
  seedStartEvent?: SeedStartEvent;
  plantDiedEvent?: PlantDiedEvent;
  producePickEvent: ProducePickEvent[] = [];

}
