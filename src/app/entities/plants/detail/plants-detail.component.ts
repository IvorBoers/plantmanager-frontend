import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PlantService} from "../plant-service";
import {Plant} from "../../../domain/plant";
import {SeedPackage} from "../../../domain/seed-package";
import {SeedStartEvent} from "../../../domain/seed-start-event";
import {SeedPackageService} from "../../seed-package/seed-package-service";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {BuyEvent} from "../../../domain/buy-event";
import {MatSelectChange} from "@angular/material/select";
import {PlantSpeciesService} from "../../plantspecies/plant-species-service";
import {PlantSpecies} from "../../../domain/plant-species";
import {PlantDiedEvent} from "../../../domain/plant-died-event";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-plants-detail',
  templateUrl: './plants-detail.component.html',
  styleUrls: ['./plants-detail.component.scss']
})
export class PlantsDetailComponent extends AbstractDetailComponent<Plant>{
  allSeedPackages: SeedPackage[] = [];
  allPlantSpecies: PlantSpecies[] = [];
  hasBuyEvent = false;
  hasSeedStartEvent = false;
  hasPlantDiedEvent = false;

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantService, protected seedPackageService: SeedPackageService, protected plantSpeciesService: PlantSpeciesService, sanitizer: DomSanitizer) {
    super(router, route, _snackBar, service, sanitizer)
  }

  ngOnInit() {
    super.ngOnInit();
    this.seedPackageService.getAll().subscribe(result => this.allSeedPackages = result);
    this.plantSpeciesService.getAll().subscribe(result => this.allPlantSpecies = result);
  }

  getEntityName(): string {
    return "plants";
  }

  getOverviewRoute() {
    return "entities/plants";
  }

  createNewItem(): Plant {
    return new Plant();
  }

  setItem(one: Plant) {
    super.setItem(one);
    this.hasBuyEvent = one.buyEvent != null;
    this.hasSeedStartEvent = one.seedStartEvent != null;
    this.hasPlantDiedEvent = one.plantDiedEvent != null;
  }

  onBuyChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.buyEvent = new BuyEvent();
    } else {
      this.item.buyEvent = undefined;
    }
  }

  onSeedStartChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.seedStartEvent = new SeedStartEvent();
    } else {
      this.item.seedStartEvent = undefined;
    }
  }

  onSeedPackageChangeEvent(event: MatSelectChange) {
    if (event.value) {
      this.item.plantSpecies = event.value.plantSpecies;
    }
  }

  onPlantDiedChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.plantDiedEvent = new PlantDiedEvent();
    } else {
      this.item.plantDiedEvent = undefined;
    }
  }

}
