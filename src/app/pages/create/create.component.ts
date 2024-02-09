import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SuperheroeService } from '../../services/superheroe.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  public fb = inject(FormBuilder)
  public superheroCreate!:FormGroup
  public service=inject(SuperheroeService)
  constructor(){
    this.superheroCreate=this.initForm()
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
