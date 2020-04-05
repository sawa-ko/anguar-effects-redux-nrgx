import { UsuarioModel } from '../../models/usuario.model';
import * as fromUsuarioActions from '../actions';

export interface usuarioState {
  user: UsuarioModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initState: usuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export function UsuarioReducer(
  state = initState,
  action: fromUsuarioActions.usuarioAcciones,
): usuarioState {
  switch (action.type) {
    case fromUsuarioActions.CARGAR_USUARIO:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromUsuarioActions.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        user: { ...action.payload },
      };
    case fromUsuarioActions.CARGAR_USUARIO_FAIL:
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
