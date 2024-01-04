import { Injectable } from '@angular/core';
import { NuevoPersonalExistenteGQL, EntradaPersona } from '../../../graphql/generated';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaExistenteService {

  constructor(
    private _nuevoPersonalExistenteGQL: NuevoPersonalExistenteGQL
  ) { }

  nuevoPersonalExistente(Alias: string, Nombres: string, Apellidos: string, Verificador: string, RUN: number) {
    const EntradaPersona$ = this._nuevoPersonalExistenteGQL.mutate({
      EntradaPersonas: {
        Alias,
        Nombres,
        Apellidos,
        Verificador,
        RUN
      }
    })
    const EntradaPersona = lastValueFrom(EntradaPersona$);  
    return EntradaPersona;
  }



}
