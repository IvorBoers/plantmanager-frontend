import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ProducePickEvent} from "../../domain/produce-pick-event";

@Injectable({
  providedIn: 'root'
})
export class ProducePickEventService extends EntityService<ProducePickEvent> {

  constructor(http: HttpClient) {
    super(http, "producepickevent");
  }

}
