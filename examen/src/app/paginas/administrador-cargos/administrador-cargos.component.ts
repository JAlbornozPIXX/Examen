import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { PersonaExistenteService } from '../../servicios/persona-existente.service';
import {MatSelectModule} from '@angular/material/select'; 
import { MatTableModule } from '@angular/material/table';
import { NuevoCargoGQL } from '../../../../graphql/generated';

@Component({
  selector: 'app-administrador-cargos',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatSelectModule, MatTableModule],
  templateUrl: './administrador-cargos.component.html',
  styleUrl: './administrador-cargos.component.scss'
})
export class AdministradorCargosComponent {
  datos: any = [];
  displayedColumns = ['Nombres'];
  
  form = this._formBuilder.group({
    Nombres: ['', [Validators.required]],
    Apellidos: ['', [Validators.required]],
    RUN: ['', [Validators.required]],
    Verificador: ['', [Validators.required]],
  });
  constructor(
    private _formBuilder: FormBuilder,

  ) { }
  ngOnInit(): void {

  }

  async entradaPersonalExistente() {
    const { Nombres, Apellidos, Verificador, RUN } = this.form.value;
    await this._personaExistenteService.nuevoPersonalExistente(Nombres+" "+Apellidos, Nombres, Apellidos, Verificador, parseInt(RUN))
    .then((data) => { console.log(data); })
    .catch((error) => { console.log(error); });
    
  }
}
