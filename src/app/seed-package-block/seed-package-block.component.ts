import {Component, OnInit} from '@angular/core';
import {SeedPackageService} from "../entities/seed-package/seed-package-service";
import {SeedPackage} from "../domain/seed-package";
import {PlantSpeciesTypeService} from "../entities/plantspecies-type/plant-species-type-service";
import {PlantSpeciesType} from "../domain/plant-species-type";

@Component({
  selector: 'app-seed-package-block',
  templateUrl: './seed-package-block.component.html',
  styleUrls: ['./seed-package-block.component.scss']
})
export class SeedPackageBlockComponent implements OnInit {
  items: SeedPackage[] = [];
  types: PlantSpeciesType[] = [];
  itemsPresent = false;
  typesPresent = false;

  constructor(protected seedPackageService: SeedPackageService, protected plantSpeciesTypes: PlantSpeciesTypeService) {
  }

  ngOnInit(): void {
    this.plantSpeciesTypes.getAll().subscribe(result => {
      this.types = result;
      this.typesPresent = true;
    });
    this.seedPackageService.getAll().subscribe(result => {
      this.setSeedPackages(result);
      this.itemsPresent = true;
    });
  }

  private setSeedPackages(result: SeedPackage[]) {
    this.items = result;
  }

  public isDataPresent() {
    return this.typesPresent && this.itemsPresent;
  }

  public getItemsByTypeMap() {
    const map = new Map();

    this.types.forEach(type => {
      const list = this.getItemsByType(type);
      if (list.length > 0) {
        map.set(type, list);
      }
    })
    let itemsWithoutType = this.getItemsByType();
    if (itemsWithoutType.length > 0) {
      let emptyType = new PlantSpeciesType();
      emptyType.name = "Untyped"
      map.set(emptyType, itemsWithoutType);
    }
    return map;
  }

  public getItemsByType(type?: PlantSpeciesType) {
    const list: SeedPackage[] = [];
    this.items.forEach(item => {
      if (type == undefined) {
        if (item.plantSpecies.type == undefined) {
          list.push(item);
        }
      } else if (type.id == item.plantSpecies.type?.id) {
        list.push(item);
      }
    });
    return list;
  }
}
