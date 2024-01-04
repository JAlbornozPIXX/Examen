import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { PersonaExistenteService } from '../../servicios/persona-existente.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',

})
export class DialogComponent {

  form = this._formBuilder.group({
    Nombres: ['', [Validators.required]],
    Apellidos: ['', [Validators.required]],
    RUN: ['', [Validators.required]],
    Verificador: ['', [Validators.required]],
  });
  constructor(
    private _formBuilder: FormBuilder,
    private _personaExistenteService: PersonaExistenteService
  ) { }

  async entradaPersonalExistente() {
    const { Nombres, Apellidos, Verificador, RUN } = this.form.value;
    await this._personaExistenteService.nuevoPersonalExistente(Nombres+" "+Apellidos, Nombres, Apellidos, Verificador, parseInt(RUN))
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); });
    
  }

}

