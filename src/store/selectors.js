export const getIsLogeged = (state) => state.auth;

export const getAdverts = (state) => state.adverts.data;

export const areAdvertsLoaded = state => state.adverts.areLoaded;

export const getReduxAdvert = (advertId) => (state) =>
  getAdverts(state).find((advert) => advert.id === advertId );

export const getUi = (state) => state.ui;

