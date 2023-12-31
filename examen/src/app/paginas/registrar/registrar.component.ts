import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})




export class RegistrarComponent implements OnInit {

  private formSuscripcion: Subscription = new Subscription(); // variable para guardar la suscripcion a los cambios del formulario

  form = this._formBuilder.group({
    usuario: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    ConfirmPassword: ['', [Validators.required]]
  })

  constructor(
    private _formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    //suscribirse a los cambios, no olvidar que todos los "subscribe" se tienen que desuscribir al no usar el componente
    this.formSuscripcion = //guardar la suscripcion en una variable para poder desuscribirse despues
      this.form.valueChanges.subscribe((value) => {
        console.log(value)
      })


  }

  guardar() {
    console.log(this.form.value);
  }

  ngOnDestroy(): void {
    this.formSuscripcion.unsubscribe(); // desuscribirse de los cambios del formulario
  }

}
