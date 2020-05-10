import { Component } from '@angular/core';
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
export class Tab1Page {
  myDevice: any;
  progressBarValue;

  constructor(
    private device: Device,
    private appVersion: AppVersion,
    private file: File,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    public alertController: AlertController) {
    this.myDevice = this.device;
  }

  ngAfterContentInit(): void {
    this.isUpdate();
  }
  ionViewDidEnter() {
    this.isUpdate();
    console.log('did enter');
  }

  isUpdate() {
    // step 1: get version number
    this.appVersion.getVersionNumber().then((value: any) => {
      console.log(value);
      // step 2
      this.showAlert();
    }).catch((err) => {
      console.log('getVersionNumber:' + err);
    });
  }

  async showAlert() {
    // step 3: update or not
    const alert = await this.alertController.create({
      header: 'Update!',
      message: 'Have latest version! Do update?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            // step 4: download apk
            this.downloadApp();
          }
        }
      ]
    });
    await alert.present();
  }

  downloadApp() {
    const targetUrl = 'http://www.ionic.wang/jdshop.apk';
    console.log(this.file.dataDirectory); // get the app install/home directory
    const fileTransfer: FileTransferObject = this.transfer.create();
    // (first param) download/remote url, (second param) storage location
    fileTransfer.download(targetUrl, this.file.dataDirectory + 'aaa.apk')
      .then((entry) => {
        // step 5: success, open apk
        this.fileOpener.open(entry.toURL(), 'application/vnd.android.package-archive').then(() => {
          console.log('File is opened');
        }).catch((err) => {
          console.log('Error opening file', err);
        });
      }, (err) => {
        alert(JSON.stringify(err));
      });
    // progress-bar
    fileTransfer.onProgress((event) => {
      this.progressBarValue = Math.ceil(event.loaded / event.total * 100);
    });
  }


}
