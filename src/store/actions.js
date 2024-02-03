import { createAdvert, getLatestAdverts, getAdvert} from "../pages/adverts/service";
import { login } from "../pages/auth/service";
import { areAdvertsLoaded } from "./selectors";
import {
  ADVERTS_CREATED_ERROR,
  ADVERTS_CREATED_REQUEST,
  ADVERTS_CREATED_SUCCESS,
  ADVERTS_DETAIL_ERROR,
  ADVERTS_DETAIL_REQUEST,
  ADVERTS_DETAIL_SUCCESS,
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
  return async function (dispatch, getState) {
    try {
      dispatch(authLoginRequest());
      await login(credentials);
      dispatch(authLoginSucces());
    } catch (error) {
      dispatch(authLoginError(error));
      throw error;
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
  return async function (dispatch, getState) {
    if (areAdvertsLoaded(getState())) {
      return;
    }

    try {
      dispatch(advertsLoadedRequest());
      const adverts = await getLatestAdverts();
      dispatch(advertsLoadedSuccess(adverts));
    } catch (error) {
      dispatch(advertsLoadedError(error));
      throw error;
    }
  };
}

export function loadAdvert(advertId) {
  return async function (dispatch, getState) {
    try {
      dispatch(advertDetailRequest());
      const advert = await getAdvert(advertId);
      dispatch(advertDetailSuccess(advert));
    } catch (error) {
      dispatch(advertDetailError(error));
      throw error;
    }
  };
}

export const advertsCreateSuccess = (adverts) => ({
  type: ADVERTS_CREATED_SUCCESS,
  payload: adverts,
});

export const advertsCreatedRequest = () => ({
  type: ADVERTS_CREATED_REQUEST,
});

export const advertsCreatedError = (error) => ({
  type: ADVERTS_CREATED_ERROR,
  error: true,
  payload: error,
});

export function createNewAdvert(advert) {
  return async function (dispatch, _getState) {
    try {
      dispatch(advertsCreatedRequest());
      const newAdvert = await createAdvert(advert);
      dispatch(advertsCreateSuccess(newAdvert));
    } catch (error) {
      dispatch(advertsCreatedError(error));
      throw error;
    }
  };
}

export const advertDetailSuccess = (advert) => ({
  type: ADVERTS_DETAIL_SUCCESS,
  payload: advert,
});

export const advertDetailRequest = () => ({
  type: ADVERTS_DETAIL_REQUEST,
});

export const advertDetailError = (error) => ({
  type: ADVERTS_DETAIL_ERROR,
  error: true,
  payload: error,
});

export const uiResetError = () => ({ type: UI_RESET_ERROR });
