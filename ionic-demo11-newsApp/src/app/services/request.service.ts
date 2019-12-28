import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
  // sync同步
  getData() {
    return 'this is sync service data';
  }
  // callback
  getCallbackData(cb) {
    // 1
    // 2
    setTimeout(() => {
      // 4
      const data = 'callback-callback';
      // return data;
      cb(data)
    }, 1000);
    // 3
  }
  // Promise
  getPromiseData() {
    // reject dont need in this situation
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Promise--P');
      }, 2000);
    })
  }
  // RxJS
  getRxjsData() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next('RxJS-----R')
        // observer.error('error msg')
      }, 3000);
    })
  }
  // execute multiple times
  getRxjsIntervalData() {
    let count = 0
    return new Observable<any>((observer) => {
      setInterval(() => {
        observer.next(count++)
        // observer.error('error msg')
      }, 3000);
    })
  }
}
