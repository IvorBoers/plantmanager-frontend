import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedPackageListComponent } from './seed-package-list.component';

describe('SeedPackageListComponent', () => {
  let component: SeedPackageListComponent;
  let fixture: ComponentFixture<SeedPackageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedPackageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
