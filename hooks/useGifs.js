import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export default function useGifs({ keyword }) {
  const [isLoading, setIsLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

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

  return { isLoading, gifs };
}
