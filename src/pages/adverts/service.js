import client from "../../api/client";

const advertsUrl = "/api/v1/adverts";

export const getLatestAdverts = (filter = {}) => {
  const params = new URLSearchParams(filter);

  return client.get(`${advertsUrl}?${params.toString()}`);
};

export const createAdvert = (advert) => {
  const url = advertsUrl;
  return client.post(url, advert);
};

export const getAdvert = (advertId) => {
  const url = `${advertsUrl}/${advertId}`;
  return client.get(url);
};
