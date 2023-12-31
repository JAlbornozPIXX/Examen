import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';
import { RegistrarComponent } from './paginas/registrar/registrar.component';
import { PersonaExistenteComponent } from './persona-existente/persona-existente.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'iniciar-sesion' },
    {
        path: '', 
        component: AppComponent, 
        children: [
            { path: 'iniciar-sesion', component:IniciarSesionComponent },
            { path: 'registrar', component: RegistrarComponent },
            { path: 'persona-existente', component:PersonaExistenteComponent }
        
            
         
        ]
    }
];
