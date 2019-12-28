import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  public clickedHero: Hero
  public heroes: Hero[]
  // single instance
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }

  onClick(hero: Hero): void {
    this.clickedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}
