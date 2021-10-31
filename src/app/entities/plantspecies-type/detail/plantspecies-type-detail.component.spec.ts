import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlantSpeciesTypeDetailComponent} from "./plantspecies-type-detail.component";

describe('PlantSpeciesTypeEditComponent', () => {
  let component: PlantSpeciesTypeDetailComponent;
  let fixture: ComponentFixture<PlantSpeciesTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSpeciesTypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSpeciesTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
