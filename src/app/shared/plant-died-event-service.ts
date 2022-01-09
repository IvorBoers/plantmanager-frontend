import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {EntityService} from "./entity-service";
import {PlantDiedEvent} from "../domain/plant-died-event";

@Injectable({
  providedIn: 'root'
})
export class PlantDiedEventService extends EntityService<PlantDiedEvent> {

  constructor(http: HttpClient) {
    super(http, "plantdiedevents");
  }

}
