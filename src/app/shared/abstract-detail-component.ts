import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Entity} from "../domain/entity";
import {EntityService} from "./entity-service";

@Component({template: ''})
export abstract class AbstractDetailComponent<T extends Entity> implements OnInit {
  item!: T;
  isCreate = false;

  protected constructor(private router: Router, protected route: ActivatedRoute, private _snackBar: MatSnackBar,
                        protected service: EntityService<T>) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (isNaN(+id)) {
        this.isCreate = true;
        // new item
        this.setItem(this.createNewItem());
      } else {
        this.loadItem(Number(id));
      }
    }
  }

  compareById(obj1: any, obj2: any): boolean {
    if (typeof obj2 === 'object') {
      return obj1 && obj2 && obj1.id === obj2.id;
    }
    return false;
  }

  protected loadItem(id: number) {
    this.service.getOne(id).subscribe(one => {
      this.setItem(one)
    });
  }

  abstract createNewItem(): T;

  setItem(one: T) {
    this.item = one;
  }

  abstract getEntityName(): string;

  openSnackBar(message: string, entity: string) {
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }

  save() {
    let action;
    if (this.isCreate) {
      action = this.service.create(this.item);
    } else {
      action = this.service.update(this.item);
    }
    action.subscribe(response => {
      if (response.errorMessage) {
        this.openSnackBar("Error saving entity: " + response.errorMessage, this.getEntityName());
      } else {
        this.openSnackBar("Saved entity", this.getEntityName());
        this.router.navigate([this.getOverviewRoute()]).then();
      }
    }, (response) => {
      if (response.errorMessage) {
        this.openSnackBar("Error saving entity: " + response.errorMessage, this.getEntityName());
      }
    });
  }

  bindImageId($event: number) {
    this.item.imageId = $event;
    this.service.update(this.item).subscribe(updateResponse => {
      if (updateResponse.errorMessage) {
        this.openSnackBar("Failed to bind image to entity: " + updateResponse.errorMessage, "Image");
      } else {
        this.openSnackBar("Upload finished", "Image");
      }
    });
  }
  abstract getOverviewRoute(): string;

}

