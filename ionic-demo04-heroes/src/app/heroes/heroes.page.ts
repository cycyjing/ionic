import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from '../service/hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {
  public heroes: Hero[]
  public selectedHero: Hero
  // create single hero instance
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }
}
