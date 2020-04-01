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

  ajaxGet(url: string) {
    const api = this.config.domain + url;
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  ajaxPost(url: string, json: object) {
    const api = this.config.domain + url;
    return new Promise((resolve, reject) => {
      this.http.post(api, json).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }
}
