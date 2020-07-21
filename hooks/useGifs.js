import { useState, useEffect, useRef } from "react";
import getGifsService from "services/getGifsService";
import { useGifsContext } from "context/GifsContext";

const INITIAL_PAGE = 0;

export default function useGifs({ keyword } = {keyword: null}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [currentKeyword, setCurrentKeyword] = useState("");

  const { gifs, setGifs } = useGifsContext();
  const componentDidMountRef = useRef(false);
console.log(keyword);
  useEffect(
    () => {
      setIsLoading(true);
      const lastKeyword = localStorage.getItem("lastKeyword");
      const keywordToUse = keyword || lastKeyword || "null"; // Get the keyword from LS
      setCurrentKeyword(keywordToUse);

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

  useEffect(
    () => {
      if (page === INITIAL_PAGE) return;
      setIsLoadingNextPage(true);
      getGifsService({ keyword: currentKeyword, page }).then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
        setIsLoadingNextPage(false);
      });
    },
    [currentKeyword, page, setGifs]
  );

  return { isLoading, isLoadingNextPage, gifs, setPage };
}
