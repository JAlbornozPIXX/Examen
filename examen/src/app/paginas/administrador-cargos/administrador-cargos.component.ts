import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NombreCargosGQL } from '../../../../graphql/generated';
import { CargoService } from '../../servicios/cargo.service';
import { EMPTY, Subject, Subscription, switchMap, takeUntil } from 'rxjs';


@Component({
  selector: 'app-administrador-cargos',
  standalone: true,
  imports: [MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule],
  templateUrl: './administrador-cargos.component.html',
  styleUrl: './administrador-cargos.component.scss'
})
export class AdministradorCargosComponent implements OnInit{
  datos: any = [];
  displayedColumns = ['Nombre'];
  private querySusbscription: Subscription = new Subscription(); //Ya que utilizo la suscripción por switchmap no lo utilice, pero lo dejo por si a caso
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  private variables$ = new Subject<{ id: string }>();


  form = this._formBuilder.group({
    Nombre: ['', [Validators.required]]
  });
  constructor(
    private _formBuilder: FormBuilder,
    private _CargoService: CargoService,
    private _nombreCargosGQL: NombreCargosGQL

  ) { }
  ngOnInit(): void {
    this._nombreCargosGQL
      .watch()
      .valueChanges.pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ data }) => {
        this.datos = data?.cargo;
      });
    this.buscarSeleccionadoSwitchmap();
  }

  buscarSeleccionadoSwitchmap() {
    this.variables$
      .pipe(
        switchMap((data) => {
          if (!data) return EMPTY;
          return this._nombreCargosGQL.watch().valueChanges;
        }),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(({ data }) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  async entradaNuevoCargo() {
    await this._CargoService.nuevoCargo(this.form.value.Nombre)
      .then((data) => { console.log(data); })
      .catch((error) => { console.log(error); });

  }
}
