import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGif({ keyword }) {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      getGifs({ keyword }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
      });
    },
    [keyword]
  );

  if (isLoading) return <p>Cargando...</p>;

  return gifs.map(({ id, title, url }) =>
    <Gif id={id} key={id} title={title} url={url} />
  );
}
