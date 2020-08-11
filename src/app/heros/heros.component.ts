import { Component, OnInit } from '@angular/core';
import {  Hero } from "../hero";
import { HEROS } from "../mock-heros";

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

  heros = HEROS;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
