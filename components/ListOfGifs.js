import Gif from "./Gif";

export default function ListOfGifs({ gifs }) {
  return gifs.map(({ id, title, url }) =>
    <Gif id={id} key={id} title={title} url={url} />
  );
}
