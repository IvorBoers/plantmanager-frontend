import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PlantsDetailComponent} from "./plantspecies-detail.component";

describe('PlantSpeciesEditComponent', () => {
  let component: PlantsDetailComponent;
  let fixture: ComponentFixture<PlantsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
