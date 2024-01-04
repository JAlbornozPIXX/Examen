import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, RouterModule, MatIconModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})


export class RegistrarComponent implements OnInit {
  hide = true;
  errorMessage: string;
  private formSuscripcion: Subscription = new Subscription(); // variable para guardar la suscripcion a los cambios del formulario

  form = this._formBuilder.group({
    usuario: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService, 
    private _router: Router
  ) {}


  ngOnInit(): void {
    //suscribirse a los cambios, no olvidar que todos los "subscribe" se tienen que desuscribir al no usar el componente
    this.formSuscripcion = //guardar la suscripcion en una variable para poder desuscribirse despues
      this.form.valueChanges.subscribe((value) => {
        console.log(value)
      })


  }
  ngOnDestroy(): void {
    this.formSuscripcion.unsubscribe(); // desuscribirse de los cambios del formulario
  }

  async registrar() {
    if (this.form.invalid) return (this.errorMessage = 'El form');
    if(this.form.value.password !== this.form.value.confirmPassword) return (this.errorMessage = 'Las contraseñas no coinciden');
    const { data, error } = await this._authService.registrar(
      this.form.value.usuario,
      this.form.value.password
      
    );

      if (error) {
        alert("Error al registrar usuario, por favor intente nuevamente");
        return (this.errorMessage = error.message);
      }
      this._router.navigate(['/iniciar-sesion']);
      return data;

  } 
}
