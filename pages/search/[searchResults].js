import { Fragment, useRef, useEffect } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

export default function SearcResults({ keyword }) {
  const { isLoading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false
  });

  const debounceHandleNextPage = useRef();
  
  console.log(isNearScreen);
  // const handleNextPage = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  const handleNextPage = () => {
    console.log("next page");
  };

  debounceHandleNextPage.current = () =>
    debounce(() => {
      console.log("next page"), 1000;
    });

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage.current();
  });

  return (
    <Fragment>
      {isLoading
        ? "Loading..."
        : <Fragment>
            <h3>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            <section id="snitch" ref={externalRef} />
          </Fragment>}
      <br />
      <button onClick={handleNextPage}>Get Next Page</button>
    </Fragment>
  );
}
