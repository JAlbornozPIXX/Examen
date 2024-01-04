import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { EMPTY, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ListaPersonalExistenteGQL } from '../../../graphql/generated';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../paginas/dialog/dialog.component';

@Component({
  selector: 'app-persona-existente',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AsyncPipe,
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './persona-existente.component.html',
  styleUrl: './persona-existente.component.scss',
})
export class PersonaExistenteComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  datos: any = [];
  displayedColumns = ['Alias', 'Nombres', 'Apellido', 'Rut'];

  private querySubscription: Subscription = new Subscription();

  private variables$ = new Subject<{ id: string }>();

  constructor(
    private _listaPersonalExistenteGQL: ListaPersonalExistenteGQL,
    private _authService: AuthService,
    private _router: Router,
    public dialog: MatDialog,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async dashboard(){
    this._router.navigate(['/dashboard']);
  }

  async cerrarSesion() {
    const { error } = await this._authService.cerrarSesion();
    if (error) {
      alert('Error al cerrar sesion');
      return;
    }
    this._router.navigate(['/iniciar-sesion']);
  }

  ngOnInit(): void {
    this._listaPersonalExistenteGQL
      .watch()
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ data }) => {
        this.datos = data?.personalExistente;
      });

    this.buscarSeleccionadoSwitchmap();
  }

  buscarSeleccionadoNormal() {
    this.querySubscription.unsubscribe();
    this.querySubscription = this._listaPersonalExistenteGQL
      .watch()
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ data }) => {
        this.datos = data?.personalExistente;
      });
  }

  buscarSeleccionadoSwitchmap() {
    //no funciona :(
    this.variables$
      .pipe(
        switchMap((data) => {
          if (!data) return EMPTY;
          return this._listaPersonalExistenteGQL.watch().valueChanges;
        }),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(({ data }) => {
        console.log(data);
      });
  }

  buscar(id: string) {
    this.variables$.next({ id });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  entradaPersonalExistente() {
    
  }

}
