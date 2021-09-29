import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ProducePickEvent} from "../../../domain/produce-pick-event";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer} from "@angular/platform-browser";
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

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: ProducePickEventService, sanitizer: DomSanitizer, protected plantService: PlantService) {
    super(router, route, _snackBar, service, sanitizer)
  }

  ngOnInit() {
    super.ngOnInit();
    this.plantService.getAll().subscribe(all => this.allPlants = all);
  }

  createNewItem(): ProducePickEvent {
    return new ProducePickEvent();
  }

  getEntityName(): string {
    return "producepickevent";
  }

  getOverviewRoute(): string {
    return "entities/producepickevents";
  }


}
