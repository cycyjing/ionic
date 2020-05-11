import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
/* custom import */
import Vconsole from 'vconsole';
const vconsole = new Vconsole();
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonTaped: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appMinimize: AppMinimize,
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerBackButtonAction();
    });
  }

  registerBackButtonAction() {
    this.platform.backButton.subscribe(() => {
      this.showExit();
    });
  }

  async showExit() {
    if (this.backButtonTaped) {
      this.appMinimize.minimize();
    } else {
      const toast = await this.toastController.create({
        message: 'Tap again to exit the App',
        duration: 2000,
        position: 'middle'
      });
      toast.present();
      this.backButtonTaped = true;
      // if did not tap in 2 seconds
      setTimeout(() => {
        this.backButtonTaped = false;
      }, 2000);
    }
  }


}
