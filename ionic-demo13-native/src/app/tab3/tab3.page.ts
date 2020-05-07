import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  imgSrc: any;

  constructor(private camera: Camera) { }

  takePictures() {
    const options: CameraOptions = {
      quality: 100, // quality
      destinationType: this.camera.DestinationType.DATA_URL, // return img type：base64 or url/FILE_URL
      encodingType: this.camera.EncodingType.JPEG, // return format
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM, // choose from camera or photolibrary
      targetHeight: 500,
      targetWidth: 500
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imgSrc = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log('Camera issue: ' + err);
    });
  }

}
