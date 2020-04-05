import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  usuarios: reducers.usuariosState;
  usuario: reducers.usuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.UsuariosReducer,
  usuario: reducers.UsuarioReducer,
};
