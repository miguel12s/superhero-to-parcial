import { Component, Input, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuperheroeService } from '../../services/superheroe.service';
import { SuperHero } from '../../interfaces/superheroe';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  
  public fb = inject(FormBuilder)
  public superheroCreate!:FormGroup
  public service=inject(SuperheroeService)
  constructor(){
    this.superheroCreate=this.initForm()
    this.superheroCreate.patchValue({
      name:this.hero.name,
      power:this.hero.power,
      universe:this.hero.universe
    })
  }

  initForm(): FormGroup {
    return this.fb.group(
      {
        name: ['', Validators.required],
        power: ['', Validators.required],
        universe:['',Validators.required]
      },
      
     


    )
  }
  onSubmit(){
    this.service.addSuperhero(this.superheroCreate.value)
  }
}
