import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingTermsService() {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const res = await fetch(url);
  const response = await res.json().then(fromApiResponseToGifs);

  return response;
}
