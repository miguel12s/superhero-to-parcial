import { RouterOutlet } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import {  Component, OnInit, inject } from '@angular/core';
import { SuperheroeService } from './services/superheroe.service';
import { SuperHero } from './interfaces/superheroe';
import { SuperheroComponent } from './components/superhero/superhero.component';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './pages/update/update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateComponent,SuperheroComponent,CommonModule,UpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  hero:SuperHero={
    id: 0,
    name: '',
    power: '',
    universe: ''
  }
  title = 'actividad-superheroes';
  superheroes!:SuperHero[]
  public service=inject(SuperheroeService)
  create:boolean=true

  ngOnInit(): void {
    this.superheroes=this.service.superheroe
    console.log(this.superheroes)
  }
  
  edit(hero:SuperHero){
    this.create=false
    this.hero=hero


  }
  onCreate(){
    this.create=true
    
  }
  updateHero(hero:Event){
    console.log(hero)
// this.superheroes=hero    // this.service.update(hero)
  }


  delete(id:Event){
console.log(id);

    // this.service.delete()
  }
}
