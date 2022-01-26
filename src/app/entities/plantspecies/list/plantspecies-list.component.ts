import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {PlantSpecies} from "../../../domain/plant-species";
import {PlantSpeciesService} from "../plant-species-service";

@Component({
  selector: 'app-plantspecies-list',
  templateUrl: './plantspecies-list.component.html',
  styleUrls: ['./plantspecies-list.component.scss']
})
export class PlantSpeciesListComponent extends AbstractEntityTableComponent<PlantSpecies> {

  constructor(plantSpeciesService: PlantSpeciesService) {
    super(plantSpeciesService)
    this.setDisplayedColumns(['name', 'type', 'parent', 'maximumHeight', 'sungrade'])
  }

}
