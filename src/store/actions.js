import { getLatestAdverts } from "../pages/adverts/service";
import { login } from "../pages/auth/service";
import { areAdvertsLoaded } from "./selectors";
import {
  ADVERTS_LOADED_ERROR,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  UI_RESET_ERROR,
} from "./types";

export const authLoginSucces = () => ({
  type: AUTH_LOGIN_SUCCESS,
});

export const authLoginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

export const authLoginError = (error) => ({
  type: AUTH_LOGIN_ERROR,
  error: true,
  payload: error,
});

export function authLogin(credentials) {
    return async function(dispatch, getState){
        try {
            dispatch(authLoginRequest());
            await login(credentials);
            dispatch(authLoginSucces());
            
          } catch (error) {
            dispatch(authLoginError(error));
            throw(error);
          }
        };
    }



export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const advertsLoadedSuccess = (adverts) => ({
  type: ADVERTS_LOADED_SUCCESS,
  payload: adverts,
});

export const advertsLoadedRequest = () => ({
    type: ADVERTS_LOADED_REQUEST,
  });

  export const advertsLoadedError = (error) => ({
    type: ADVERTS_LOADED_ERROR,
    error: true,
    payload: error,
  });

  export function loadAdverts() {
    return async function(dispatch, getState){
        if(areAdvertsLoaded(getState())) {
            return;
        }
        
        try {
            dispatch(advertsLoadedRequest());
            const adverts = await getLatestAdverts()
            dispatch(advertsLoadedSuccess(adverts));
            
          } catch (error) {
            dispatch(advertsLoadedError(error));
            throw(error);
          }
        };
    }

export const uiResetError = () => ({type: UI_RESET_ERROR});