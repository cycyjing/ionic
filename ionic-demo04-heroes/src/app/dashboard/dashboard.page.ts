import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../service/hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public heroes: Hero[] = []

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes().slice(1, 5)
  }
}
