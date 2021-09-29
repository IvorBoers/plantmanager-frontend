import {EntityService} from "../../shared/entity-service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SeedPackage} from "../../domain/seed-package";

@Injectable({
  providedIn: 'root'
})
export class SeedPackageService extends EntityService<SeedPackage> {

  constructor(http: HttpClient) {
    super(http, "seedpackages");
  }

}
