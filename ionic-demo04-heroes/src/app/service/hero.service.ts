import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'

import { MessageService } from '../service/message.service'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  // Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data.
  getHeroes(): Hero[] {
    this.messageService.add('HeroService: fetched heroes')
    return HEROES
  }
}
