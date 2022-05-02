const base_url =
  process.env.NODE_ENV == "development"
    ? "http://localhost:9090"
    : "https://zatech-app.herokuapp.com";

export const GET_ALL_JOKES_CATEGORIES = `${base_url}/api/v1/chuck/categories`;
export const GET_ALL_STARWAR_PEOPLE = `${base_url}/api/v1/swapi/people`;
export const SEARCH_CHUCKS_AND_SWAPI_APIs = `${base_url}/api/v1/search?query`;
export const SAERCH_JOKE_BY_CATEGORY = `${base_url}/api/v1/chuck/jokes`;
