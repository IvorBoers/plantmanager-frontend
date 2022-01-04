import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Entity} from "../domain/entity";
import {EntityService} from "./entity-service";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpResponse} from "@angular/common/http";

@Component({template: ''})
export abstract class AbstractDetailComponent<T extends Entity> implements OnInit {
  item!: T;
  isCreate = false;

  selectedFiles = new Map(); // maps fieldName to FileList;

  protected constructor(private router: Router, protected route: ActivatedRoute, private _snackBar: MatSnackBar, protected service: EntityService<T>, private sanitizer: DomSanitizer) {
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
    this.service.getOne(id).subscribe(one => this.setItem(one));
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
      if (response != null && response.errorMessage !== undefined && response.errorMessage != null) {
        this.openSnackBar("Error: " + response.errorMessage, this.getEntityName());
      } else {
        this.openSnackBar("Saved", this.getEntityName());
        this.router.navigate([this.getOverviewRoute()]);
      }
    });
  }

  getImageSrc(image: string) {
    let objectURL = 'data:image/png;base64,' + image;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  abstract getOverviewRoute(): string;

  upload(key: string): void {
    if (this.selectedFiles.has(key)) {
      let currentFileUpload = this.selectedFiles.get(key).item(0);
      if (currentFileUpload) {
        this.service.upload(this.item.id, key, currentFileUpload).subscribe(event => {
          if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!');
            this.loadItem(this.item.id);
            this.openSnackBar("Upload finished", "Image");
          } else {
            this.openSnackBar('Upload failed', "Image");
          }
        });
      }
      this.selectedFiles.delete(key);
    }
  }

  selectFile(key: string, event: any) {
    this.selectedFiles.set(key, event.target.files);
  }
}

