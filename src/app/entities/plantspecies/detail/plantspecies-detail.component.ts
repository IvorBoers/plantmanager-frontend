import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {PlantSpecies} from "../../../domain/plant-species";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PlantSpeciesService} from "../plant-species-service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-plantspecies-detail',
  templateUrl: './plantspecies-detail.component.html',
  styleUrls: ['./plantspecies-detail.component.scss']
})
export class PlantSpeciesDetailComponent extends AbstractDetailComponent<PlantSpecies>{
  all!: PlantSpecies[];

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantSpeciesService, sanitizer: DomSanitizer) {
    super(router, route, _snackBar, service, sanitizer)
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll().subscribe(result => this.all = result);
  }

  getEntityName(): string {
    return "plantspecies";
  }

  getOverviewRoute() {
    return "entities/plantspecies";
  }

  createNewItem(): PlantSpecies {
    return new PlantSpecies();
  }

}
