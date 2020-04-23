import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StorageService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public storageService: StorageService) { }

  canActivate() {
    console.log('canActivate');
    const userinfo = this.storageService.get('userinfo');
    if (userinfo && userinfo.username) {
      return true;
    } else {
      return false;
    }
  }

}
