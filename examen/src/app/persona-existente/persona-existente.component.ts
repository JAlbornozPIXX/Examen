import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 


@Component({
  selector: 'app-persona-existente',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './persona-existente.component.html',
  styleUrl: './persona-existente.component.scss'
})
export class PersonaExistenteComponent {

}
