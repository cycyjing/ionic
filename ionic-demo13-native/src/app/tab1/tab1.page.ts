import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  myDevice: any;

  constructor(
    private device: Device,
    private appVersion: AppVersion,
    private file: File,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    public alertController: AlertController) {
    this.myDevice = this.device;
  }

  ngOnInit(): void {
    this.isUpdate();
  }

  isUpdate() {
    // step 1
    this.appVersion.getVersionNumber().then((value: any) => {
      console.log(value);
      // step 2
      this.showAlert();
    }).catch((err) => {
      console.log('getVersionNumber:' + err);
    });
  }
  async showAlert() {
    // step 3
    const alert = await this.alertController.create({
      header: 'Update!',
      message: 'Have latest version! Do update?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            // step 4
            this.downloadApp();
          }
        }
      ]
    });
    await alert.present();
  }

  downloadApp() {
    const targetUrl = 'http://www.ionic.wang/aaa.apk';
    // console.log(this.file.dataDirectory);
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(targetUrl, this.file.dataDirectory + 'aaa.apk')
      .then((entry) => {

      }, (err) => {
        alert(JSON.stringify(err));
      });
  }

}
