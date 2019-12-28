import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  ajaxGet(api) {
    // is a object, get async data or error
    return new Promise((resolve, reject) => {
      // async
      this.http.get(api).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  axiosGetData(api) {
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then((data) => { resolve(data) })
        .catch((error) => { reject(error) })
    })
  }
}