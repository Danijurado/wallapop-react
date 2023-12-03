import client from "../../api/client";

const advertsUrl = '/api/v1/adverts'

export const getLatestAdverts = (filter = {}) => {
    const params= new URLSearchParams(filter);

    return client.get(`${advertsUrl}?${params.toString()}`);
};
