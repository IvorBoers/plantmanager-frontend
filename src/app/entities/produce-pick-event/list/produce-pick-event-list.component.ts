import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {ProducePickEvent} from "../../../domain/produce-pick-event";
import {ProducePickEventService} from "../produce-pick-event-service";

@Component({
  selector: 'app-produce-pick-event-list',
  templateUrl: './produce-pick-event-list.component.html',
  styleUrls: ['./produce-pick-event-list.component.scss']
})
export class ProducePickEventListComponent  extends AbstractEntityTableComponent<ProducePickEvent> {

  constructor(service: ProducePickEventService) {
    super(service)
    this.setDisplayedColumns(['description', 'date', 'plant', 'count', 'weight'])
  }

}
