import { login } from "../pages/auth/service";
import {
  ADVERTS_LOADED,
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

export const advertsLoaded = (adverts) => ({
  type: ADVERTS_LOADED,
  payload: adverts,
});

export const uiResetError = () => ({type: UI_RESET_ERROR});