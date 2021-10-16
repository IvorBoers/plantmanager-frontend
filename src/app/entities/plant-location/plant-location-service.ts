import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {PlantLocation} from "../../domain/plant-location";

@Injectable({
  providedIn: 'root'
})
export class PlantLocationService extends EntityService<PlantLocation> {

  constructor(http: HttpClient) {
    super(http, "plantlocations");
  }
}
