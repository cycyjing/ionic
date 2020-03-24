import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  config: any = {
    domain: 'http://jd.itying.com/'
  };

  constructor(public http: HttpClient) { }

  ajaxGet(url) {
    const api = this.config.domain + url;
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }
}
