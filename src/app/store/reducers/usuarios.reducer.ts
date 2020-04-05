import { UsuarioModel } from '../../models/usuario.model';
import * as fromUsuariosActions from '../actions';

export interface usuariosState {
  users: UsuarioModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: usuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export function UsuariosReducer(
  state = initState,
  action: fromUsuariosActions.usuariosAcciones,
): usuariosState {
  switch (action.type) {
    case fromUsuariosActions.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromUsuariosActions.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        users: [...action.payload],
      };
    case fromUsuariosActions.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          messages: action.payload.message,
          url: action.payload.url,
        },
      };
    default:
      return state;
  }
}
