import { RouterOutlet } from '@angular/router';
import { CreateComponent } from './pages/create/create.component';
import { Component, OnInit, inject } from '@angular/core';
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
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  hero!:SuperHero
  title = 'actividad-superheroes';
  superheroes!:SuperHero[]
  public service=inject(SuperheroeService)
  create:boolean=true

  ngOnInit(): void {
    this.superheroes=this.service.superheroe
  }
  
  edit($event:SuperHero){
    
    this.create=false

  }
}
