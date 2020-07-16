import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import { useGifsContext } from "../context/GifsContext";

export default function useGifs({ keyword }) {
  const [isLoading, setIsLoading] = useState(false);
  const { gifs, setGifs } = useGifsContext();

  useEffect(
    () => {
      setIsLoading(true);
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random"; // Get the keyword from LS

      getGifs({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword); // Save the keyword on LS
      });
    },
    [keyword, setGifs]
  );

  return { isLoading, gifs };
}
