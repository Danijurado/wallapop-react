import { advertsCreateSuccess, advertsLoadedSuccess, authLoginSucces } from "../actions";
import { ADVERTS_LOADED_SUCCESS, AUTH_LOGIN_SUCCESS } from "../types";


describe('authLoginSuccess', () => {
    it('should create an action for successful login', () => {
      const expectedAction = {
        type: AUTH_LOGIN_SUCCESS,
      };
      const action = authLoginSucces();
      expect(action).toEqual(expectedAction);
    });
  });

describe('advertsLoadedSuccess', () => {
    it('should create an action to load adverts successfully', () => {
      const adverts = [{ id: 1, title: 'Advert 1' }];
  
      const expectedAction = {
        type: ADVERTS_LOADED_SUCCESS,
        payload: adverts,
      };
  
      expect(advertsLoadedSuccess(adverts)).toEqual(expectedAction);
    });
  });

