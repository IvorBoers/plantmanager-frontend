import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducePickEventDetailComponent } from './produce-pick-event-detail.component';

describe('ProducePickEventDetailComponent', () => {
  let component: ProducePickEventDetailComponent;
  let fixture: ComponentFixture<ProducePickEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducePickEventDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducePickEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
