import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducePickEventListComponent } from './produce-pick-event-list.component';

describe('ProducePickEventListComponent', () => {
  let component: ProducePickEventListComponent;
  let fixture: ComponentFixture<ProducePickEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducePickEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducePickEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
