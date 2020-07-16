import { Fragment } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearcResults({ keyword }) {
  const { isLoading, gifs } = useGifs({ keyword });

  return (
    <Fragment>
      {isLoading ? "Loading..." : <ListOfGifs gifs={gifs} />}
    </Fragment>
  );
}
