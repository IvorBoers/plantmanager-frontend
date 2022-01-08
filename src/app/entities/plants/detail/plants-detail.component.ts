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
import {PlantLocationService} from "../../plant-location/plant-location-service";
import {PlantLocation} from "../../../domain/plant-location";
import {forkJoin} from "rxjs";
import {RelocationEvent} from "../../../domain/relocation-event";
import {Event} from "../../../domain/event";
import {ProducePickEventService} from "../../produce-pick-event/produce-pick-event-service";
import {ProducePickEvent} from "../../../domain/produce-pick-event";

@Component({
  selector: 'app-plants-detail',
  templateUrl: './plants-detail.component.html',
  styleUrls: ['./plants-detail.component.scss']
})
export class PlantsDetailComponent extends AbstractDetailComponent<Plant> {
  allSeedPackages: SeedPackage[] = [];
  allPlantSpecies: PlantSpecies[] = [];
  allPlantLocations: PlantLocation[] = [];
  hasBuyEvent = false;
  hasSeedStartEvent = false;
  hasPlantDiedEvent = false;
  newRelocationEvent?:RelocationEvent;
  private producePickEvents: ProducePickEvent[] = [];

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantService, sanitizer: DomSanitizer,
              protected plantLocationService: PlantLocationService,
              protected seedPackageService: SeedPackageService,
              protected plantSpeciesService: PlantSpeciesService,
              protected producePickEventService: ProducePickEventService) {
    super(router, route, _snackBar, service, sanitizer)
  }

  ngOnInit() {

    forkJoin({
      seedpackages: this.seedPackageService.getAll(),
      species: this.plantSpeciesService.getAll(),
      locations: this.plantLocationService.getAll()}
    ).subscribe(array => {
      this.allPlantLocations = array['locations']
      this.allPlantSpecies = array['species']
      this.allSeedPackages = array['seedpackages']
      super.ngOnInit();
    });

  }

  getEntityName(): string {
    return "plants";
  }

  getOverviewRoute() {
    return "entities/plants";
  }

  createNewItem(): Plant {
    let plant = new Plant();
    const seedPackageId = this.route.snapshot.paramMap.get('seedpackage');

    if (seedPackageId) {
      let seedPackage = this.allSeedPackages.find(sp => sp.id == Number(seedPackageId))
      if (seedPackage) {
        plant.plantSpecies = seedPackage.plantSpecies;
        let event = new SeedStartEvent();
        event.date = new Date();
        event.seedPackage = seedPackage;
        plant.seedStartEvent = event;
      }
    }
    return plant;
  }

  setItem(one: Plant) {
    this.hasBuyEvent = one.buyEvent != null;
    this.hasSeedStartEvent = one.seedStartEvent != null;
    this.hasPlantDiedEvent = one.plantDiedEvent != null;
    if (one.relocationEvents.length == 0) {
      this.startNewRelocationEvent();
    } else {
      one.relocationEvents.sort(this.compareByDate())
    }
    this.producePickEventService.getAllForPlant(one.id).subscribe(pickEvents => this.producePickEvents = pickEvents);
    super.setItem(one);
  }

  startNewRelocationEvent() {
    this.newRelocationEvent = new RelocationEvent()
    this.newRelocationEvent.date = new Date()
  }

  saveRelocationEvent() {
    if (this.newRelocationEvent instanceof RelocationEvent) {
      this.item.relocationEvents.push(this.newRelocationEvent);
    }
    this.newRelocationEvent = undefined;
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

  hasCurrentLocation(): boolean {
    return this.item.relocationEvents.length > 0
  }

  getCurrentLocation(): PlantLocation | undefined {
    if (this.hasCurrentLocation()) {
      return this.item.relocationEvents[0].location;
    }
    return undefined;
  }

  getEventHistory() {
    let result: Event[] = []
    if (this.item) {
      if (this.item.plantDiedEvent) {
        result.push(this.item.plantDiedEvent)
      }
      if (this.item.buyEvent) {
        result.push(this.item.buyEvent)
      }
      if (this.item.seedStartEvent) {
        result.push(this.item.seedStartEvent)
      }
      this.item.relocationEvents.forEach(it => result.push(it))
      this.producePickEvents.forEach(it => result.push(it))
      result.sort(this.compareByDate());

    }
    return result
  }

  private compareByDate() {
    return function (a: Event, b: Event) {
      console.log("event " + a.constructor.name)
      const c = new Date(a.date);
      const d = new Date(b.date);
      return d.getTime() - c.getTime();
    };
  }
}
