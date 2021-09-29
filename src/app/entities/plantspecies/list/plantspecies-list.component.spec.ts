import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlantSpeciesListComponent} from "./plantspecies-list.component";

describe('PlantSpeciesListComponent', () => {
  let component: PlantSpeciesListComponent;
  let fixture: ComponentFixture<PlantSpeciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSpeciesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSpeciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
