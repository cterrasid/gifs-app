import { useState, useEffect } from "react";
import getGifsService from "services/getGifsService";
import { useGifsContext } from "context/GifsContext";

export default function useGifs({ keyword }) {
  const [isLoading, setIsLoading] = useState(false);
  const { gifs, setGifs } = useGifsContext();

  useEffect(
    () => {
      setIsLoading(true);
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random"; // Get the keyword from LS

      getGifsService({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        localStorage.setItem("lastKeyword", keyword); // Save the keyword on LS
      });
    },
    [keyword, setGifs]
  );

  return { isLoading, gifs };
}
