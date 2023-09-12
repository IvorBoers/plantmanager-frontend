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
import {PlantLocationService} from "../../plant-location/plant-location-service";
import {PlantLocation} from "../../../domain/plant-location";
import {forkJoin} from "rxjs";
import {RelocationEvent} from "../../../domain/relocation-event";
import {Event} from "../../../domain/event";
import {PlantDiedEventService} from "../../../shared/plant-died-event-service";
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
  newProducePickEvent?: ProducePickEvent;

  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantService,
              protected plantLocationService: PlantLocationService,
              protected seedPackageService: SeedPackageService,
              protected plantSpeciesService: PlantSpeciesService,
              protected plantDiedEventService: PlantDiedEventService // TODO create component for each event
  ) {
    super(router, route, _snackBar, service)
  }

  override ngOnInit() {
    forkJoin([
      this.seedPackageService.getAll(),
      this.plantSpeciesService.getAll(),
      this.plantLocationService.getAll()]
    ).subscribe(([sp, ps, pl]) => {
      this.allPlantLocations = pl;
      this.allPlantSpecies = ps;
      this.allSeedPackages = sp;
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
        plant.species = seedPackage.plantSpecies;
        let event = new SeedStartEvent();
        event.date = new Date();
        event.seedPackageId = seedPackage.id;
        plant.seedStartEvent = event;
      }
    }
    return plant;
  }

  override setItem(one: Plant) {
    if (one.buyEvent) this.hasBuyEvent = true;
    if (one.seedStartEvent) this.hasSeedStartEvent = true;
    this.hasPlantDiedEvent = one.diedEvent != null;
    super.setItem(one);
    if (one.relocationEvents.length == 0) {
      this.startNewRelocationEvent();
    } else {
      one.relocationEvents.sort(this.compareByDate())
    }
  }

  startNewRelocationEvent() {
    this.newRelocationEvent = new RelocationEvent()
    this.newRelocationEvent.date = new Date()
    this.newRelocationEvent.plantId = this.item.id;
  }

  saveRelocationEvent() {
    if (this.newRelocationEvent instanceof RelocationEvent) {
      this.item.relocationEvents.push(this.newRelocationEvent);
    }
    this.newRelocationEvent = undefined;
    this.save();
  }

  onBuyChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.buyEvent = new BuyEvent();
      this.item.buyEvent.plantId = this.item.id;
    } else {
      this.item.buyEvent = undefined;
    }
  }

  onSeedStartChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.seedStartEvent = new SeedStartEvent();
      this.item.seedStartEvent.plantId = this.item.id;
    } else {
      this.item.seedStartEvent = undefined;
    }
  }

  onSeedPackageChangeEvent(event: MatSelectChange) {
    if (event.value) {
      this.item.species = event.value.plantSpecies;
    }
  }

  onPlantDiedChangeEvent(event: MatCheckboxChange) {
    if (event.checked) {
      this.item.diedEvent = new PlantDiedEvent();
      this.item.diedEvent.plantId = this.item.id;
    } else {
      this.item.diedEvent = undefined;
    }
  }

  getEventHistory() {
    let result: Event[] = []
    if (this.item) {
      if (this.item.diedEvent) {
        result.push(this.item.diedEvent)
      }
      if (this.item.buyEvent) {
        result.push(this.item.buyEvent)
      }
      if (this.item.seedStartEvent) {
        result.push(this.item.seedStartEvent)
      }
      if (this.item.producePickEvents) {
        this.item.producePickEvents.forEach(it => result.push(it))
      }
      this.item.relocationEvents.forEach(it => result.push(it))

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

  bindImageIdToPlantDiedEvent($event: number) {
    if (this.item.diedEvent) {
      this.item.diedEvent.imageId = $event;
      this.plantDiedEventService.update(this.item.diedEvent).subscribe(updateResponse => {
        if (updateResponse.errorMessage) {
          this.openSnackBar("Failed to bind image to died event: " + updateResponse.errorMessage, "Image");
        } else {
          this.openSnackBar("Upload finished", "Image");
        }
      });
    }
  }

  getTotalProduceCount() {
    let count = 0;
    if (this.item && this.item.producePickEvents) {
      this.item.producePickEvents.forEach(it => count += it.count)
    }
    return count
  }

  getTotalProduceWeight() {
    let count = 0;
    if (this.item && this.item.producePickEvents) {
      this.item.producePickEvents.forEach(it => count += it.weight)
    }
    return count
  }

  startNewProducePickEvent() {
    let event = this.newProducePickEvent = new ProducePickEvent()
    event.date = new Date()
    return event
  }

  saveProducePickEvent() {
    if (this.newProducePickEvent instanceof ProducePickEvent) {
      this.item.producePickEvents.push(this.newProducePickEvent);
    }
    this.newProducePickEvent = undefined;
    this.save();
  }

  getLocationName(locationId: number) {
    return this.allPlantLocations.find(it => it.id == locationId)?.name;
  }
}
