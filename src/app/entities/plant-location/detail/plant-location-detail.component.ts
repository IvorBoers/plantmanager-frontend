import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../../../shared/abstract-detail-component";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer} from "@angular/platform-browser";
import {PlantLocation} from "../../../domain/plant-location";
import {PlantLocationService} from "../plant-location-service";
import {FormControl} from "@angular/forms";
import {Color} from '@angular-material-components/color-picker';

@Component({
  selector: 'app-plant-location-detail',
  templateUrl: './plant-location-detail.component.html',
  styleUrls: ['./plant-location-detail.component.scss']
})
export class PlantLocationDetailComponent extends AbstractDetailComponent<PlantLocation>{
  all!: PlantLocation[];
  colorCtr: FormControl = new FormControl(null);


  constructor(router: Router, route: ActivatedRoute, _snackBar: MatSnackBar, service: PlantLocationService, sanitizer: DomSanitizer) {
    super(router, route, _snackBar, service, sanitizer)
  }

  setItem(one: PlantLocation) {
    const temp = this.hexToRgb(one.color);
    if (temp && this.colorCtr) {
      this.colorCtr.setValue(new Color(temp.r, temp.g, temp.b));
    }
    super.setItem(one);
  }

  ngOnInit() {
    super.ngOnInit();
    this.service.getAll().subscribe(result => this.all = result);
    this.colorCtr.valueChanges.subscribe(value => {
      if (this.item) {
        this.item.color = value.hex
      }
    });
  }

  getEntityName(): string {
    return "plant-location";
  }

  getOverviewRoute() {
    return "entities/plantlocations";
  }

  createNewItem(): PlantLocation {
    return new PlantLocation();
  }

  hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}
