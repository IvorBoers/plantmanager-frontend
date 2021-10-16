import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlantSpeciesListComponent} from "./entities/plantspecies/list/plantspecies-list.component";
import {PlantSpeciesDetailComponent} from "./entities/plantspecies/detail/plantspecies-detail.component";
import {SeedPackageListComponent} from "./entities/seed-package/list/seed-package-list.component";
import {SeedPackageDetailComponent} from "./entities/seed-package/detail/seed-package-detail.component";
import {PlantsListComponent} from "./entities/plants/list/plants-list.component";
import {PlantsDetailComponent} from "./entities/plants/detail/plants-detail.component";
import {ProducePickEventListComponent} from "./entities/produce-pick-event/list/produce-pick-event-list.component";
import {ProducePickEventDetailComponent} from "./entities/produce-pick-event/detail/produce-pick-event-detail.component";
import {PlantLocationListComponent} from "./entities/plant-location/list/plant-location-list.component";
import {PlantLocationDetailComponent} from "./entities/plant-location/detail/plant-location-detail.component";

const routes: Routes = [
  {path: 'entities/plantspecies', component: PlantSpeciesListComponent},
  {path: 'entities/plantspecies/:id', component: PlantSpeciesDetailComponent},
  {path: 'entities/producepickevents', component: ProducePickEventListComponent},
  {path: 'entities/producepickevents/:id', component: ProducePickEventDetailComponent},
  {path: 'entities/seedpackages', component: SeedPackageListComponent},
  {path: 'entities/seedpackages/:id', component: SeedPackageDetailComponent},
  {path: 'entities/plants', component: PlantsListComponent},
  {path: 'entities/plants/:id', component: PlantsDetailComponent},
  {path: 'entities/plantlocations', component: PlantLocationListComponent},
  {path: 'entities/plantlocations/:id', component: PlantLocationDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
