import { Fragment, useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearcResults({ keyword }) {
  const { isLoading, gifs, setPage } = useGifs({ keyword });
  const snitchRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : snitchRef,
    once: false
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => {
      setPage(prevPage => prevPage + 1), 100;
    }),
    []
  );

  useEffect(
    () => {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <Fragment>
      {isLoading
        ? "Loading..."
        : <Fragment>
            <h3>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            <section id="snitch" ref={snitchRef} />
          </Fragment>}
      <br />
    </Fragment>
  );
}
