import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedPackageBlockComponent } from './seed-package-block.component';

describe('SeedPackageBlockComponent', () => {
  let component: SeedPackageBlockComponent;
  let fixture: ComponentFixture<SeedPackageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedPackageBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedPackageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
