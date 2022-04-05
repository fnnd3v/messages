import axios from "axios";

const API_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const FetchImages = async () =>
  await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
