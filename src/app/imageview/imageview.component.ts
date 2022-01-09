import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImagesService} from "../shared/images-service";
import {Entity} from "../domain/entity";
import {Image} from "../domain/image";
import {DomSanitizer} from "@angular/platform-browser";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.scss']
})
export class ImageviewComponent implements OnInit {

  @Input()
  entity?: Entity;
  @Input()
  imageId?: number;
  @Input()
  altText?: string;

  @Output()
  imageUploadEvent = new EventEmitter<number>();

  image?: Image;
  fileList?: FileList;

  constructor(protected service: ImagesService, private sanitizer: DomSanitizer, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    if (this.imageId) {
      this.service.getOne(this.imageId).subscribe(result => this.image = result);
    }
  }

  getImageSrc(image: Image) {
    let objectURL = 'data:image/png;base64,' + image.bytes;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  upload(): void {
    // !! listen to imageUploadEvent to attach imageId to entity!!
    if (this.fileList) {
      let currentFileUpload = this.fileList.item(0);
      if (currentFileUpload) {
        if (this.imageId) {
          this.updateImage(currentFileUpload);
        } else {
          this.createNewImage(currentFileUpload);
        }
      }
      this.fileList = undefined;
    }
  }

  private createNewImage(currentFileUpload: File) {
    this.service.uploadNew(currentFileUpload).subscribe(event => {
      if (event.errorMessage) {
        this.openSnackBar("Image upload failed: " + event.errorMessage, "Image");
      } else {
        this.imageId = event.entityId;
        this.imageUploadEvent.emit(this.imageId);
        this.service.getOne(this.imageId).subscribe(result => this.image = result)
      }
    });
  }

  private updateImage(currentFileUpload: File) {
    if (this.imageId) {
      this.service.uploadUpdated(this.imageId, currentFileUpload).subscribe(event => {
        if (event.errorMessage) {
          this.openSnackBar("Image upload failed: " + event.errorMessage, "Image");
        } else {
          this.imageId = event.entityId;
          this.service.getOne(this.imageId).subscribe(result => this.image = result)
        }
      });
    }
  }

  selectFile(event: any) {
    this.fileList = event.target.files;
  }

  openSnackBar(message: string, entity: string) {
    // TODO shared with abstract detail component
    this._snackBar.open(message, entity, {
      duration: 2000,
    });
  }
}
