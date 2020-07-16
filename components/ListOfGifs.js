import { Fragment } from "react";
import Gif from "./Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <Fragment>
      {gifs.map(({ id, title, url }) =>
        <Gif id={id} key={id} title={title} url={url} />
      )}
    </Fragment>
  );
}
