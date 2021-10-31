import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {PlantSpeciesType} from "../../../domain/plant-species-type";
import {PlantSpeciesTypeService} from "../plant-species-type-service";

@Component({
  selector: 'app-plantspecies-type-list',
  templateUrl: './plantspecies-type-list.component.html',
  styleUrls: ['./plantspecies-type-list.component.scss']
})
export class PlantSpeciesTypeListComponent extends AbstractEntityTableComponent<PlantSpeciesType> {

  constructor(service: PlantSpeciesTypeService) {
    super(service)
    this.setDisplayedColumns(['name'])
  }

}
