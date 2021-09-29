import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedPackageDetailComponent } from './seed-package-detail.component';

describe('SeedPackageDetailComponent', () => {
  let component: SeedPackageDetailComponent;
  let fixture: ComponentFixture<SeedPackageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedPackageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedPackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
