import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuperheroeService } from '../../services/superheroe.service';
import { SuperHero } from '../../interfaces/superheroe';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',

})
export class UpdateComponent implements OnChanges {
  @Input() hero!:SuperHero
  @Output() update=new EventEmitter<SuperHero[]>()
  
  public fb = inject(FormBuilder)
  public superheroCreate!:FormGroup
  public service=inject(SuperheroeService)

  constructor(){
    this.superheroCreate=this.initForm()

  }
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.updateHero()
  }

  initForm(): FormGroup {
    return this.fb.group(
      {
        name: ['', Validators.required],
        power: ['', Validators.required],
        universe:['',Validators.required]
      }
      
     


    )
  }
  onSubmit(){
    const hero:SuperHero=this.superheroCreate.value
   this.service.editHero(hero,this.hero.id)    

  }
  updateHero(){
    this.superheroCreate.patchValue({
      name:this.hero.name,
      power:this.hero.power,
      universe:this.hero.universe
    })    
  }



}
