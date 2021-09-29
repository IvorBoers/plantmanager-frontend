import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PlantSpeciesDetailComponent} from "./plantspecies-detail.component";

describe('PlantSpeciesEditComponent', () => {
  let component: PlantSpeciesDetailComponent;
  let fixture: ComponentFixture<PlantSpeciesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSpeciesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSpeciesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
