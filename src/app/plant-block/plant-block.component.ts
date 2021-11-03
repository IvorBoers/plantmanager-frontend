import { Component, OnInit } from '@angular/core';
import {PlantService} from "../entities/plants/plant-service";
import {Plant} from "../domain/plant";

@Component({
  selector: 'app-plant-block',
  templateUrl: './plant-block.component.html',
  styleUrls: ['./plant-block.component.scss']
})
export class PlantBlockComponent implements OnInit {
  items: Plant[] = [];

  constructor(protected plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.getAll().subscribe(result => this.items = result);
  }

}
