import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EMPTY, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ListaPersonalExistenteGQL } from '../../../graphql/generated';

@Component({
  selector: 'app-persona-existente',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, AsyncPipe],
  templateUrl: './persona-existente.component.html',
  styleUrl: './persona-existente.component.scss',
})
export class PersonaExistenteComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  datos: any = [];
 
  private querySubscription: Subscription = new Subscription();

  private variables$ = new Subject<{ id: string; }>();

  constructor(
    private _listaPersonalExistenteGQL: ListaPersonalExistenteGQL,
  ) { }

  ngOnInit(): void {
    this._listaPersonalExistenteGQL.watch().valueChanges.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(({ data }) => {
      this.datos = data?.personalExistente
    })

    this.buscarSeleccionadoSwitchmap();
  }


  buscarSeleccionadoNormal() {
    this.querySubscription.unsubscribe();
    this.querySubscription = this._listaPersonalExistenteGQL.watch().valueChanges.pipe(
      takeUntil(this._unsubscribeAll)
    ).subscribe(({ data }) => {
      this.datos = data?.personalExistente
    })
  }

  buscarSeleccionadoSwitchmap() { //no funciona :(
    this.variables$.pipe(
      switchMap((data) => {
        if (!data) return EMPTY;
        return this._listaPersonalExistenteGQL.watch().valueChanges
      }),
      takeUntil(this._unsubscribeAll)
    ).subscribe(({ data }) => {
      console.log(data)
    })
  }

  buscar(id: string) {
    this.variables$.next({ id });
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
