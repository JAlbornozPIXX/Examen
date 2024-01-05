import { Injectable } from '@angular/core';
import { NuevoCargoGQL } from '../../../graphql/generated';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(
    private _nuevoCargoGQL: NuevoCargoGQL
  ) { }

  nuevoCargo(Nombre: string) {
  const Nombre$ = this._nuevoCargoGQL.mutate({
    Nombre
  });
  const EntradaCargo = lastValueFrom(Nombre$);
  return EntradaCargo;

  }
}
