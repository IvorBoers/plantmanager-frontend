import {Entity} from "../domain/entity";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AbstractPlantManagerService} from "./abstract-plantmanager-service";
import {PostResponse} from "../domain/post-response";

export abstract class EntityService<T extends Entity> extends AbstractPlantManagerService {

  protected constructor(http: HttpClient, private entityName: string) {
    super(http, entityName);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getUrl());
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.getUrl("/" + id));
  }

  update(item: T): Observable<PostResponse> {
      return this.http.post<PostResponse>(this.getUrl(), item);
  }

  create(item: T): Observable<PostResponse> {
    return this.http.post<PostResponse>(this.getUrl(), item);
  }

  delete(item: T): Observable<PostResponse> {
    return this.http.delete<PostResponse>(this.getUrl("/" + item.id));
  }

}
