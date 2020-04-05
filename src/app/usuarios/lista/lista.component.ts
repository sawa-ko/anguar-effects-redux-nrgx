import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuarios } from 'src/app/store/actions';

@Component({
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  public usuarios: UsuarioModel[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new CargarUsuarios());
    /*this.usuario.getUsers().subscribe((data: any) => {
      this.usuarios = data;
    });*/
  }
}
