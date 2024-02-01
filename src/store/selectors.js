export const getIsLogeged = (state) => state.auth;

export const getAdverts = (state) => state.adverts;

export const getReduxAdvert = (advertId) => (state) =>
  getAdverts(state).find((advert) => advert.id === Number(advertId));

export const getUi = (state) => state.ui;

