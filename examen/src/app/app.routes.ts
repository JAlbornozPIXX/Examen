import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'iniciar-sesion' },
    {
        path: '', 
        component: AppComponent, 
        children: [
            { path: 'iniciar-sesion', component:IniciarSesionComponent }, 
        ]
    }
];
