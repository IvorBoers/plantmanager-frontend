import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantBlockComponent } from './plant-block.component';

describe('PlantBlockComponent', () => {
  let component: PlantBlockComponent;
  let fixture: ComponentFixture<PlantBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
