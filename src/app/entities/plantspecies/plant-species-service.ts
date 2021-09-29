import {EntityService} from "../../shared/entity-service";
import {PlantSpecies} from "../../domain/plant-species";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PlantSpeciesService extends EntityService<PlantSpecies> {

  constructor(http: HttpClient) {
    super(http, "plantspecies");
  }
}
