import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { SuperHero } from '../../interfaces/superheroe';

@Component({
  selector: 'app-superhero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './superhero.component.html',
  styleUrl: './superhero.component.css'
})
export class SuperheroComponent {

@Input() superheroe!:SuperHero
@Output() edit:EventEmitter<SuperHero>=new EventEmitter<SuperHero>

update(hero:SuperHero){
  this.edit.emit(hero)
}



}
