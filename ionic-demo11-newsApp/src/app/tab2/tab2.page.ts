import { Component } from '@angular/core';
import { map, filter } from 'rxjs/operators'
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public requestService: RequestService) { }

  ngOnInit(): void {
    // sync
    console.log(this.requestService.getData() + ' 111111')
    // callback
    this.requestService.getCallbackData((data) => {
      console.log(data + ' 22222222')
    })
    // Promise
    this.requestService.getPromiseData()
      .then((data) => { console.log(data + ' 333333') })
    // RxJS
    this.requestService.getRxjsData()
      .subscribe((data) => { console.log(data + ' 4444444') })

    // after 1 second, abort execute
    let s = this.requestService.getRxjsData()
      .subscribe((data) => { console.log(data + ' un') })
    setTimeout(() => {
      s.unsubscribe() // abort/stop/cancel execute
      console.log('unsubscribe the data!!!')
    }, 1000);

    // RxJS execute multiple times
    this.requestService.getRxjsIntervalData()
    // .subscribe((data) => { console.log(data + '----interval') })

    // map filter
    this.requestService.getRxjsIntervalData()
      .pipe(
        filter((value) => {
          if (value % 2 == 0) {
            return true
          }
        }),
        map((value) => {
          return value * value
        })
      )
      .subscribe((data) => { console.log(data + '----odd') })
  }
}
