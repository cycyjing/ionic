import { Component } from '@angular/core';
/* custom import */
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qrscan',
  templateUrl: './qrscan.page.html',
  styleUrls: ['./qrscan.page.scss'],
})
export class QrscanPage {
  isShow: boolean = false;
  light: boolean;
  frontCamera: boolean;

  constructor(private qrScanner: QRScanner, public navController: NavController) { }

  ionViewWillEnter() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            alert(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.navController.back();
          });
          this.qrScanner.show(); // open camera 
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          console.log('No camera auth, go to Setting!');
          this.qrScanner.openSettings();
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          console.log('others');
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  ionViewDidEnter() {
    this.isShow = true;
  }

  ionViewWillLeave() {
    this.qrScanner.hide(); // close scan, otherwise the camera is always on
    this.qrScanner.destroy();
  }
  /* Open/Close Flashlight */
  toggleLight() {
    if (this.light) {
      this.qrScanner.disableLight();
    } else {
      this.qrScanner.enableLight();
    }
    this.light = !this.light;
  }
  /* Front/Back Camera */
  toggleCamera() {
    if (this.frontCamera) {
      this.qrScanner.useBackCamera();
    } else {
      this.qrScanner.useFrontCamera();
    }
    this.frontCamera = !this.frontCamera;
  }


}
