import client from "../../api/client";

const advertsUrl = '/api/v1/adverts'

export const getLatestAdverts = () => {
    return client.get(advertsUrl);
};
