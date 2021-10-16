import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {PlantLocationService} from "../plant-location-service";
import {PlantLocation} from "../../../domain/plant-location";

@Component({
  selector: 'app-plant-location-list',
  templateUrl: './plant-location-list.component.html',
  styleUrls: ['./plant-location-list.component.scss']
})
export class PlantLocationListComponent extends AbstractEntityTableComponent<PlantLocation> {

  constructor(service: PlantLocationService) {
    super(service)
    this.setDisplayedColumns(['color', 'name', 'description'])
  }

}
