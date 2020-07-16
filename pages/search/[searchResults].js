import { Fragment } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import useGifs from "../../hooks/useGifs";

export default function SearcResults({ keyword }) {
  const { isLoading, gifs } = useGifs({ keyword });

  return (
    <Fragment>
      {isLoading 
        ? "Loading..." 
        : <>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        </>
      }
    </Fragment>
  );
}
