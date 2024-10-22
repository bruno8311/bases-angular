import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'spiderman'
  }

  changeAge(): void {
    this.age = 24
  }

  resetForm():void {
    this.name = 'ironMan';
    this.age = 45;
  }

}
