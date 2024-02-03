import storage from "../utils/storage";

import {
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_DETAIL_SUCCESS,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  UI_RESET_ERROR,
} from "./types";

const defaultState = {
  auth: !!storage.get('auth'),
  adverts: {
    areLoaded: false,
    data: [],
  },
  ui: {
    isFetching: false,
    error: null,
  },
};

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;

    case AUTH_LOGOUT:
      return false;

    default:
      return state;
  }
}

export function adverts(state = defaultState.adverts, action) {
  switch (action.type) {
    case ADVERTS_LOADED_SUCCESS:
      return {areLoaded: true, data: action.payload};

    case ADVERTS_CREATED_SUCCESS:
      return {...state, data: [action.payload, ...state.data]};

      case ADVERTS_DETAIL_SUCCESS:
        return { ...state, data: [action.payload]} 

    default:
      return state;
  }
}


export function ui(state = defaultState.ui, action) {
  if(action.error){
    
    return {
      isFetching: false,
      error: action.payload
    };

  }

  if(action.type.endsWith('/request')) {
    return {
      isFetching: false,
      error: null
    };
  }

  if(action.type.endsWith('/succes')) {
    return {
      isFetching: false,
      error: null
    };
  }

  if(action.type === UI_RESET_ERROR) {
    return {...state, error: null};
  }
  
    return state;
  }


//export default combineReducers({auth: auth, adverts: adverts});