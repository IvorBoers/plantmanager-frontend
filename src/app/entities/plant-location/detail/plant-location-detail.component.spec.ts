import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PlantLocationDetailComponent} from "./plant-location-detail.component";

describe('PlantLocationDetailComponent', () => {
  let component: PlantLocationDetailComponent;
  let fixture: ComponentFixture<PlantLocationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantLocationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
