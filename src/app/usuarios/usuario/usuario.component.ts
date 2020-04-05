import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';
import { CargarUsuario } from '../../store/actions';

@Component({
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public user: any;
  public loading: boolean;
  public error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.store.dispatch(new CargarUsuario(id));
    });

    this.store.select('usuario').subscribe((usuario) => {
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error;
    });
  }
}
