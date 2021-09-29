import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Plant} from "../../domain/plant";

@Injectable({
  providedIn: 'root'
})
export class PlantService extends EntityService<Plant> {

  constructor(http: HttpClient) {
    super(http, "plants");
  }

}
