const apiKey = "q0wT0Gsq0XwmVNPc14lCQuCuQSdKeNTE";

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;

  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { id, title, images } = image;
      const { url } = images.downsized_medium;

      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default async function getGifsService(
  { limit = 25, keyword = "" } = {}
) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;
  const res = await fetch(url);
  const response = await res.json().then(fromApiResponseToGifs);

  return response;
}
