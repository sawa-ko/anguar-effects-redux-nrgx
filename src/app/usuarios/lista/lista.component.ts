import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuarios } from 'src/app/store/actions';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, OnDestroy {
  public usuarios: UsuarioModel[] = [];
  public loading: boolean = false;
  public loaded: boolean = false;
  public isError: string;

  public subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new CargarUsuarios());
    this.subscription = this.store.select('usuarios').subscribe((data) => {
      this.usuarios = data.users;
      this.loading = data.loading;
      this.loaded = data.loaded;
      this.isError = data.error;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
