import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import { useGifsContext } from "../context/GifsContext";

export default function useGifs({ keyword }) {
  const [isLoading, setIsLoading] = useState(false);
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useGifsContext();

  useEffect(
    () => {
      setIsLoading(true);
      // Recupero la keyword del LS
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

      getGifs({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword); // Guardar la keyword en el LS
      });
    },
    [keyword, setGifs]
  );

  return { isLoading, gifs };
}
