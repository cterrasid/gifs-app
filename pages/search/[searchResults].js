import { Fragment } from "react";
import ListOfGifs from "components/ListOfGifs";
import useGifs from "hooks/useGifs";

export default function SearcResults({ keyword }) {
  const { isLoading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => {setPage(prevPage => prevPage + 1)};

  return (
    <Fragment>
      {isLoading
        ? "Loading..."
        : <Fragment>
            <h3>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
          </Fragment>}
      <br />
      <button onClick={handleNextPage}>Get Next Page</button>
    </Fragment>
  );
}
