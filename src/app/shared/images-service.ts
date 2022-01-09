import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {EntityService} from "./entity-service";
import {Image} from "../domain/image";
import {Observable} from "rxjs";
import {PostResponse} from "../domain/post-response";

@Injectable({
  providedIn: 'root'
})
export class ImagesService extends EntityService<Image> {

  constructor(http: HttpClient) {
    super(http, "images");
  }

  uploadNew(file: File): Observable<PostResponse> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    return this.http.post<PostResponse>(this.getUrl(), formdata);
  }

  uploadUpdated(id: number, file: File): Observable<PostResponse> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    return this.http.post<PostResponse>(this.getUrl() + "/" + id, formdata);
  }
}
