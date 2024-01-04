import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RouterModule, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../servicios/auth.service';



@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.scss',
})

export class IniciarSesionComponent implements OnInit {
  hide = true;

  private formSuscripcion: Subscription = new Subscription(); // variable para guardar la suscripcion a los cambios del formulario

  form = this._formBuilder.group({
    usuario: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  errorMessage: string;
  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  async iniciarSesion() {
    if (this.form.invalid) return (this.errorMessage = 'El form');
    const { data, error } = await this._authService.iniciarSesion(
      this.form.value.usuario,
      this.form.value.password
    );

    if (error) {
      alert("Error al iniciar sesion");
      return (this.errorMessage = error.message);
    }
    this._router.navigate(['/persona-existente']);
    return data;
  }
  ngOnInit(): void {
    //suscribirse a los cambios, no olvidar que todos los "subscribe" se tienen que desuscribir al no usar el componente
    this.formSuscripcion = //guardar la suscripcion en una variable para poder desuscribirse despues
      this.form.valueChanges.subscribe((value) => {
        console.log(value);
      });
  }


  ngOnDestroy(): void {
    this.formSuscripcion.unsubscribe(); // desuscribirse de los cambios del formulario
  }
}
