const apiKey = "q0wT0Gsq0XwmVNPc14lCQuCuQSdKeNTE";

const getGifs = async ({ keyword = "" } = {}) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  const res = await fetch(url);
  const response = await res.json();
  const { data = [] } = response;
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { id, title, images } = image;
      const { url } = images.downsized_medium;

      return { title, id, url };
    });
    return gifs;
  }
};

export default getGifs;
