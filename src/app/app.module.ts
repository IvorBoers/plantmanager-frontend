import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatMenuModule} from "@angular/material/menu";
import {PlantSpeciesDetailComponent} from "./entities/plantspecies/detail/plantspecies-detail.component";
import {PlantSpeciesListComponent} from "./entities/plantspecies/list/plantspecies-list.component";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatMomentDateModule, MomentDateAdapter} from "@angular/material-moment-adapter";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {SeedPackageDetailComponent} from "./entities/seed-package/detail/seed-package-detail.component";
import {SeedPackageListComponent} from "./entities/seed-package/list/seed-package-list.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {PlantsDetailComponent} from "./entities/plants/detail/plants-detail.component";
import {PlantsListComponent} from "./entities/plants/list/plants-list.component";
import {ProducePickEventDetailComponent} from './entities/produce-pick-event/detail/produce-pick-event-detail.component';
import {ProducePickEventListComponent} from './entities/produce-pick-event/list/produce-pick-event-list.component';
import {PlantLocationDetailComponent} from "./entities/plant-location/detail/plant-location-detail.component";
import {PlantLocationListComponent} from "./entities/plant-location/list/plant-location-list.component";
import {MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS, NgxMatColorPickerModule} from '@angular-material-components/color-picker';
import {PlantSpeciesTypeDetailComponent} from "./entities/plantspecies-type/detail/plantspecies-type-detail.component";
import {PlantSpeciesTypeListComponent} from "./entities/plantspecies-type/list/plantspecies-type-list.component";

export const MY_FORMATS = {
  parse: {
    dateInput:  ['YYYY-MM-DD']
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlantLocationListComponent,
    PlantLocationDetailComponent,
    PlantSpeciesListComponent,
    PlantSpeciesDetailComponent,
    PlantSpeciesTypeListComponent,
    PlantSpeciesTypeDetailComponent,
    SeedPackageDetailComponent,
    SeedPackageListComponent,
    PlantsDetailComponent,
    PlantsListComponent,
    ProducePickEventDetailComponent,
    ProducePickEventListComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    NgxMatColorPickerModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
