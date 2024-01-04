import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  
})
export class DialogComponent {

  form = this._formBuilder.group({
    Alias: ['', [Validators.required]],
    Nombres: ['', [Validators.required]],
    Apellidos: ['', [Validators.required]],
    RUN: ['', [Validators.required]],
    Verificador: ['', [Validators.required]],
  });
  constructor(
    private _formBuilder: FormBuilder,
  ){}

}

