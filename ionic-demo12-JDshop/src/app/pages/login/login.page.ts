import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public navController: NavController, public router: Router) { }

  doClose() { }

  goMy() {
    this.router.navigate(['/tabs/tab4'], { queryParams: { flag: false } });
  }
}