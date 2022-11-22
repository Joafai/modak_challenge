import client from "./client";

const endpoint =
  "/v1/artworks?&limit=100&fields=id,title,artist_display,date_display,main_reference_number,image_id";

const getArtworks = () => client.get(endpoint);

export default {
  getArtworks,
};
