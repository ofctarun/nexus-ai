export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
  }
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const Netflix_logo = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";

export const userIcon = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
