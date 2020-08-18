import { Component, OnInit } from '@angular/core';

import {  Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  /*hero : Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  heros : Hero[];
  /*selectedHero: Hero = HEROS[0];
  If we wish we can assign a predefined value to the 
  selectedHero object rather than going for *ngIf.*/

  //Just declaring selectedHero. For *ngIf

  selectedHero: Hero ;

  constructor(private heroservice: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log("Value of Selected Hero:"+this.selectedHero.id+" "+this.selectedHero.name);
  }

  getHeros():void {
    this.heros = this.heroservice.getHeros();
  }

}
