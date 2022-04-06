import axios from "axios";
import { environment } from "config/environment";

export const FetchImages = async () =>
  await axios.get(
    `https://api.unsplash.com/photos/?client_id=${environment.UNSPLASH_KEY}`
  );
