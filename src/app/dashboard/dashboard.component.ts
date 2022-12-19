import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes!: Hero[];

  constructor(private router: Router, private HeroService: HeroService) { }

  ngOnInit(): void {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 4));;
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/details', hero.id])
  }

}
