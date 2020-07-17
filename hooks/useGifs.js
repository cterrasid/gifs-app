import { useState, useEffect, useRef } from "react";
import getGifsService from "services/getGifsService";
import { useGifsContext } from "context/GifsContext";

export default function useGifs({ keyword }) {
  const [isLoading, setIsLoading] = useState(false);
  const { gifs, setGifs } = useGifsContext();
  const componentDidMountRef = useRef(false);

  useEffect(
    () => {
      setIsLoading(true);
      const keywordToUse =
        keyword || localStorage.getItem("lastKeyword") || "null"; // Get the keyword from LS

      getGifsService({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs);
        setIsLoading(false);
        componentDidMountRef.current
          ? localStorage.setItem("lastKeyword", keyword)
          : (componentDidMountRef.current = true); // Save the keyword on LS
      });
    },
    [keyword, setGifs]
  );

  return { isLoading, gifs };
}
