import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ProducePickEvent} from "../../../domain/produce-pick-event";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProducePickEventService} from "../produce-pick-event-service";
import {PlantService} from "../../plants/plant-service";
import {Plant} from "../../../domain/plant";

@Component({
  selector: 'app-produce-pick-event-detail',
  templateUrl: './produce-pick-event-detail.component.html',
  styleUrls: ['./produce-pick-event-detail.component.scss']
})
export class ProducePickEventDetailComponent extends AbstractDetailComponent<ProducePickEvent> {

  allPlants: Plant[] = []

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: ProducePickEventService, protected plantService: PlantService) {
    super(router, route, _snackBar, service)
  }

  override ngOnInit() {
    this.plantService.getAll().subscribe(all => {
      this.allPlants = all;
      super.ngOnInit();
    });

  }

  createNewItem(): ProducePickEvent {
    console.log("create new produce")
    let newItem = new ProducePickEvent();
    newItem.date = new Date();
    const plantId = this.route.snapshot.paramMap.get('plant')
    console.log("param plant " + plantId);
      if (plantId) {
        console.log("plantId=" + plantId + ", looking for it in " + this.allPlants.length + " plants")
        let plant = this.allPlants.find(it => it.id == Number(plantId));
        if (plant) {
          newItem.plantId = plant.id;
        }
      }

    return newItem;
  }

  getEntityName(): string {
    return "producepickevent";
  }

  getOverviewRoute(): string {
    return "entities/producepickevents";
  }

  getPlantName(plant: Plant) {
    var name =  "" + plant.id;
    if (plant.species) {
      name = name + " " + plant.species.name
    }
    return name
  }
}
