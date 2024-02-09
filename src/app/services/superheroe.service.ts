import { Injectable } from '@angular/core';
import { SuperHero } from '../interfaces/superheroe';

@Injectable({
  providedIn: 'root'
})
export class SuperheroeService {
  private superheroes: SuperHero[] = [
    {
      id:1,
      name:'goku',
      power:'10',
      universe:'universe'
    },
    {
      id:2,
      name:'vegeta',
      power:'9',
      universe:'universe'
    },
    {
      id:3,
      name:'freezer',
      power:'19',
      universe:'universe'
    },
    {
      id:4,
      name:'uub',
      power:'1',
      universe:'universe'
    },
    {
      id:5,
      name:'majin boo',
      power:'50',
      universe:'universe'
    },

  ];
  constructor() { }

  addSuperhero(superhero:SuperHero){
    superhero.id=this.superheroes.length+1
    this.superheroes.push(superhero)

  }
  get superheroe(){

    return this.superheroes
  }

  editHero(id:number){
    // const heroe:SuperHero=this.superheroes.filter(superheroe=>superheroe.id=id)
    // return heroe
  }
}
