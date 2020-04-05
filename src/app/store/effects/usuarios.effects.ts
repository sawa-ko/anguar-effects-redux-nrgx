import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) {}

  @Effect()
  public cargarUsuarios$ = this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIOS),
    switchMap(() => {
      return this.usuarioService
        .getUsers()
        .pipe(map((users) => new usuariosActions.CargarUsuariosSuccess(users)));
    }),
  );
}
