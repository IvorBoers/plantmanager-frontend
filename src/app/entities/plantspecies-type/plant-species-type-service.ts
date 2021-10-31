import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {PlantSpeciesType} from "../../domain/plant-species-type";

@Injectable({
  providedIn: 'root'
})
export class PlantSpeciesTypeService extends EntityService<PlantSpeciesType> {

  constructor(http: HttpClient) {
    super(http, "plantspeciestype");
  }
}
