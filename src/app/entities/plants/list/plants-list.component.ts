import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {PlantService} from "../plant-service";
import {Plant} from "../../../domain/plant";
import {PlantLocation} from "../../../domain/plant-location";

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss']
})
export class PlantsListComponent extends AbstractEntityTableComponent<Plant> {

  constructor(plantService: PlantService) {
    super(plantService)
    this.setDisplayedColumns(['id', 'plantSpecies', 'plantLocation', 'source'])
  }
  hasCurrentLocation(item: Plant): boolean {
    return item.relocationEvents.length > 0
  }

  getCurrentLocation(item: Plant): PlantLocation | undefined {
    if (this.hasCurrentLocation(item)) {
      return item.relocationEvents[0].location;
    }
    return undefined;
  }
}
