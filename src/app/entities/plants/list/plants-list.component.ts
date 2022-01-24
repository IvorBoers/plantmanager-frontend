import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {PlantService} from "../plant-service";
import {Plant} from "../../../domain/plant";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss']
})
export class PlantsListComponent extends AbstractEntityTableComponent<Plant> {

  constructor(plantService: PlantService) {
    super(plantService)
    this.setDisplayedColumns(['id', 'species', 'plantLocation', 'source'])
  }

}
