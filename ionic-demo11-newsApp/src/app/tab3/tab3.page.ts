import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public http: HttpClient, public httpService: HttpService) { }

  doGet() {
    const api = 'http://a.itying.com/api/productlist'
    this.http.get(api).subscribe((data) => {
      console.log(data)
    })
  }

  doPost() {
    // 存在跨域 cross domain
    const api = '127.0.0.1:3000/doPost'
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    this.http.post(api, { name: 'post', age: 34 }, httpOptions).subscribe((data) => { console.log(data) })
  }
  // 跨域一种解决办法
  doJsonp() {
    const api = 'http://a.itying.com/api/productlist'
    this.http.jsonp(api, 'callback')
      .subscribe((data) => { console.log(data) })
  }

  // axios
  doAxios() {
    const api = 'http://a.itying.com/api/productlist'
    this.httpService.axiosGetData(api).then((data) => {
      console.log(data)
    })
  }
}
