import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PlantLocationListComponent} from "./plant-location-list.component";

describe('PlantLocationListComponent', () => {
  let component: PlantLocationListComponent;
  let fixture: ComponentFixture<PlantLocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantLocationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
