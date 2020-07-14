import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../pages/api/getGifs";

export default function ListOfGif({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    () => {
      getGifs({ keyword }).then(gifs => setGifs(gifs));
    },
    [keyword]
  );

  return gifs.map(({ id, title, url }) =>
    <Gif id={id} key={id} title={title} url={url} />
  );
}
