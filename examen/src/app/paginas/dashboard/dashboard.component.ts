import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
