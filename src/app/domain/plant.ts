import {Entity} from "./entity";
import {PlantSpecies} from "./plant-species";
import {BuyEvent} from "./buy-event";
import {SeedStartEvent} from "./seed-start-event";
import {PlantDiedEvent} from "./plant-died-event";
import {ProducePickEvent} from "./produce-pick-event";
import {RelocationEvent} from "./relocation-event";
import {PlantLocation} from "./plant-location";

export class Plant implements Entity {
  id!: number;
  species!: PlantSpecies;
  buyEvent?: BuyEvent;
  seedStartEvent?: SeedStartEvent;
  diedEvent?: PlantDiedEvent;
  relocationEvents: RelocationEvent[] = [];
  producePickEvents: ProducePickEvent[] = [];
  currentLocation?: PlantLocation;

}
