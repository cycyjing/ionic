import { Component } from '@angular/core';
/* custom import */
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imgSrc: any;

  constructor(private camera: Camera, private transfer: FileTransfer) { }

  takePictures() {
    const options: CameraOptions = {
      quality: 100, // quality
      destinationType: this.camera.DestinationType.DATA_URL, // return img type：base64 or url/FILE_URL
      encodingType: this.camera.EncodingType.JPEG, // return format
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA, // choose from camera or photolibrary
      targetHeight: 500,
      targetWidth: 500
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imgSrc = 'data:image/jpeg;base64,' + imageData;
      this.doUpload(this.imgSrc);
    }, (err) => {
      // Handle error
      console.log('Camera issue: ' + err);
    });
  }

  doUpload(fileSrc) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      mimeType: 'image/jpeg',
      httpMethod: 'POST',
      params: {
        username: 'andy',
        age: '20',
        height: '180'
      }
    };
    fileTransfer.upload(fileSrc, 'http://jd.itying.com/imgupload', options)
      .then((data) => {
        // success
        console.log(data);
      }, (err) => {
        // error
        console.log(err);
      });
  }

}
