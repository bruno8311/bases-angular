import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk','She Hulk', 'Thor'];
  public deleteHero?: string;

  removeListHero() :void {
    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero)
  }


}
