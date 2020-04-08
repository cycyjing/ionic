import { Injectable } from '@angular/core';
import { EventEmitter } from 'eventemitter3';

@Injectable({
  providedIn: 'root'
})
/* share one instance for different pages*/
export class EventEmitterService {
  event: any;

  constructor() {
    this.event = new EventEmitter();
  }
}
