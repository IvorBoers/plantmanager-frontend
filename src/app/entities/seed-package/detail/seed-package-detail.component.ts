import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {SeedPackage} from "../../../domain/seed-package";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SeedPackageService} from "../seed-package-service";
import {PlantSpeciesService} from "../../plantspecies/plant-species-service";
import {PlantSpecies} from "../../../domain/plant-species";
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";
import {BuyEvent} from "../../../domain/buy-event";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-seed-package-detail',
  templateUrl: './seed-package-detail.component.html',
  styleUrls: ['./seed-package-detail.component.scss']
})
export class SeedPackageDetailComponent extends AbstractDetailComponent<SeedPackage> {
  allPlantSpecies: PlantSpecies[] = [];
  hasBuyEvent = false;

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: SeedPackageService, protected plantSpeciesService: PlantSpeciesService, sanitizer: DomSanitizer) {
    super(router, route, _snackBar, service, sanitizer)
  }

  ngOnInit() {
    super.ngOnInit();
    this.plantSpeciesService.getAll().subscribe(result => this.allPlantSpecies = result);
  }

  setItem(one: SeedPackage) {
    super.setItem(one);
    this.hasBuyEvent = one.buyEvent != null;
  }

  createNewItem(): SeedPackage {
    return new SeedPackage();
  }

  getEntityName(): string {
    return "seedpackage";
  }

  getOverviewRoute() {
    return "entities/seedpackages";
  }

  compareById(obj1: any, obj2: any): boolean {
    if (typeof obj2 === 'object') {
      return obj1 && obj2 && obj1.id === obj2.id;
    }
    return false;
  }

  onBuyChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.buyEvent = new BuyEvent();
    } else {
      this.item.buyEvent = undefined;
    }
  }
}
