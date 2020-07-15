import ListOfGifs from "../components/ListOfGifs";
import useGifs from '../hooks/useGifs';

export default function SearcResults({ keyword }) {
  const {isLoading, gifs} = useGifs({keyword})
  console.log(isLoading, gifs);

  return <>
  {
  isLoading ? "Loading..." : <ListOfGifs gifs = {gifs} />
  }
</>
}
