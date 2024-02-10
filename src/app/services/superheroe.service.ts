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

  editHero(superhero:SuperHero,id:number){
    
    console.log(superhero)
    const indice=this.superheroes.findIndex((hero:SuperHero)=>
    hero.id===id
    )

    if(id!==-1){
      superhero.id=id
      this.superheroes[indice]=superhero
      console.log(this.superheroes);    
    }else{
      console.error('error al encontrar')
    }
  
    
    
  }

  delete(id:number){
    const indice=this.superheroes.map((hero:SuperHero)=>
    hero.id
    ).indexOf(id)
    
    this.superheroes.splice(indice,1)
}
}