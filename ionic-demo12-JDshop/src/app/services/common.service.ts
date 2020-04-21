import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

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

  createSign(json) {
    let tempArr = [];
    for (const key in json) {
      tempArr.push(key);
    }
    tempArr = tempArr.sort();

    let temp = '';
    for (const key of tempArr) {
      temp += key + json[key];
    }
    return Md5.hashStr(temp);
  }

}
