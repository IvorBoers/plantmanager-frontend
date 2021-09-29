import {Component} from '@angular/core';
import {AbstractEntityTableComponent} from "../../../shared/abstract-entity-table.component";
import {SeedPackage} from "../../../domain/seed-package";
import {SeedPackageService} from "../seed-package-service";

@Component({
  selector: 'app-seed-package-list',
  templateUrl: './seed-package-list.component.html',
  styleUrls: ['./seed-package-list.component.scss']
})
export class SeedPackageListComponent extends AbstractEntityTableComponent<SeedPackage> {

  constructor(seedPackageService: SeedPackageService) {
    super(seedPackageService)
    this.setDisplayedColumns(['description', 'expirationdate', 'plantspecies', 'percentfull', 'source'])
  }

}
