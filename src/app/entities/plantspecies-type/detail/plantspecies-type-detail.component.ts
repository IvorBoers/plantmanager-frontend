import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer} from "@angular/platform-browser";
import {PlantSpeciesType} from "../../../domain/plant-species-type";
import {PlantSpeciesTypeService} from "../plant-species-type-service";

@Component({
  selector: 'app-plantspecies-type-detail',
  templateUrl: './plantspecies-type-detail.component.html',
  styleUrls: ['./plantspecies-type-detail.component.scss']
})
export class PlantSpeciesTypeDetailComponent extends AbstractDetailComponent<PlantSpeciesType>{
  all!: PlantSpeciesType[];

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantSpeciesTypeService, sanitizer: DomSanitizer) {
    super(router, route, _snackBar, service, sanitizer)
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll().subscribe(result => this.all = result);
  }

  getEntityName(): string {
    return "plantspecies-type";
  }

  getOverviewRoute() {
    return "entities/plantspecies-types";
  }

  createNewItem(): PlantSpeciesType {
    return new PlantSpeciesType();
  }

}
