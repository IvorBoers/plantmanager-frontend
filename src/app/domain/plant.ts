import {Entity} from "./entity";
import {PlantSpecies} from "./plant-species";
import {BuyEvent} from "./buy-event";
import {SeedStartEvent} from "./seed-start-event";
import {PlantDiedEvent} from "./plant-died-event";
import {ProducePickEvent} from "./produce-pick-event";
import {RelocationEvent} from "./relocation-event";

export class Plant implements Entity {
  id!: number;
  plantSpecies!: PlantSpecies;
  buyEvent?: BuyEvent;
  seedStartEvent?: SeedStartEvent;
  plantDiedEvent?: PlantDiedEvent;
  relocationEvents: RelocationEvent[] = [];
  producePickEvent: ProducePickEvent[] = [];


}
