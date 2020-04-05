import { Action } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios]: Cargar usuarios.';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios fallido.';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios finalizado.';

export class CargarUsuarios implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor(public payload: any) {}
}

export class CargarUsuariosSuccess implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;
  constructor(public payload: UsuarioModel[]) {}
}

export type usuariosAcciones =
  | CargarUsuarios
  | CargarUsuariosFail
  | CargarUsuariosSuccess;
