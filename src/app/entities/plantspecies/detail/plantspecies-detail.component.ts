import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {PlantSpecies} from "../../../domain/plant-species";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PlantSpeciesService} from "../plant-species-service";
import {PlantSpeciesType} from "../../../domain/plant-species-type";
import {PlantSpeciesTypeService} from "../../plantspecies-type/plant-species-type-service";
import {GrowPeriod} from "../../../domain/grow-period";

@Component({
  selector: 'app-plantspecies-detail',
  templateUrl: './plantspecies-detail.component.html',
  styleUrls: ['./plantspecies-detail.component.scss']
})
export class PlantSpeciesDetailComponent extends AbstractDetailComponent<PlantSpecies>{
  all!: PlantSpecies[];
  allTypes!: PlantSpeciesType[];
  newGrowPeriod?: GrowPeriod;
  selectedGrowPeriod?: GrowPeriod;
  growPhases = ['SOWING_INDOOR',
    'SOWING_UNDER_GLASS',
    'SOWING_OUTSIDE',
    'PLANT_UNDER_GLASS',
    'PLANT_OUTSIDE',
    'HARVEST']

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantSpeciesService,
              protected typeService: PlantSpeciesTypeService) {
    super(router, route, _snackBar, service)
  }

  override ngOnInit() {
    super.ngOnInit();
    this.service.getAll().subscribe(result => this.all = result);
    this.typeService.getAll().subscribe(result => this.allTypes = result);
  }

  override save(redirectToOverview?: boolean) {
    if (this.item.parentId) {
      // set type of parent on this item
      let parentSpecies = this.all.find(it => it.id == this.item.parentId);
      if (parentSpecies) {
        this.item.type = parentSpecies.type;
      }
    }
    super.save(redirectToOverview);
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

  saveGrowPeriod() {
    if (this.newGrowPeriod && this.newGrowPeriod.id == undefined) {
        this.item.growPeriods.push(this.newGrowPeriod);
    }
    this.newGrowPeriod = undefined;
    this.save();
  }

  startNewGrowPeriod() {
    this.selectedGrowPeriod = undefined;
    if (this.newGrowPeriod && this.newGrowPeriod.id == undefined) {
      this.newGrowPeriod = undefined;
    } else {
      this.newGrowPeriod = new GrowPeriod();
    }
  }

  deleteGrowPeriod() {
    if (this.selectedGrowPeriod) {
      let number = this.item.growPeriods.indexOf(this.selectedGrowPeriod);
      this.item.growPeriods.splice(number, 1);
      this.save();
    }
  }

  editGrowPeriod() {
    if (this.selectedGrowPeriod) {
      this.newGrowPeriod = this.selectedGrowPeriod;
    }
  }

  setSelectedGrowPeriod(row: GrowPeriod) {
    if (this.selectedGrowPeriod == row) {
      this.selectedGrowPeriod = undefined;
    } else {
      this.selectedGrowPeriod = row;
    }
  }
}

