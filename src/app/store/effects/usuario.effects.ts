import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) {}

  @Effect()
  public cargarUsuario$ = this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIO),
    switchMap((data: usuariosActions.CargarUsuario) => {
      return this.usuarioService.getUser(data.id).pipe(
        map((user) => new usuariosActions.CargarUsuarioSuccess(user)),
        catchError((error) => of(new usuariosActions.CargarUsuarioFail(error))),
      );
    }),
  );
}
