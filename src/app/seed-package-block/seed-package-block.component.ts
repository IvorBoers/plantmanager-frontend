import { Component, OnInit } from '@angular/core';
import {SeedPackageService} from "../entities/seed-package/seed-package-service";
import {SeedPackage} from "../domain/seed-package";

@Component({
  selector: 'app-seed-package-block',
  templateUrl: './seed-package-block.component.html',
  styleUrls: ['./seed-package-block.component.scss']
})
export class SeedPackageBlockComponent implements OnInit {
  items: SeedPackage[] = [];

  constructor(protected seedPackageService: SeedPackageService) {
  }

  ngOnInit(): void {
    this.seedPackageService.getAll().subscribe(result => this.items = result);
  }

}
