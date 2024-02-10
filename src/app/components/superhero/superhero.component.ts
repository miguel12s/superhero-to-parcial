import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, inject} from '@angular/core';
import { SuperHero } from '../../interfaces/superheroe';
import { SuperheroeService } from '../../services/superheroe.service';

@Component({
  selector: 'app-superhero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './superhero.component.html',
  styleUrl: './superhero.component.css'
})
export class SuperheroComponent  {

@Input() superheroe!:SuperHero
@Output() edit:EventEmitter<SuperHero>=new EventEmitter<SuperHero>
@Output() del:EventEmitter<number> =new EventEmitter<number>
private readonly service=inject(SuperheroeService)
update(){

  this.edit.emit(this.superheroe)
}

  delete(id:number){
    this.service.delete(id)
  }

}
