import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ProducePickEvent} from "../../domain/produce-pick-event";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProducePickEventService extends EntityService<ProducePickEvent> {

  constructor(http: HttpClient) {
    super(http, "producepickevent");
  }

  getAllForPlant(plantId: number): Observable<ProducePickEvent[]> {
    return this.http.get<ProducePickEvent[]>(this.getUrl("/for-plant/" + plantId));
  }
}
