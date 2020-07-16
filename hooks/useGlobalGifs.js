import { useGifsContext } from "../context/GifsContext";

export default function useGlobalGifs() {
  const { gifs } = useGifsContext();
  return gifs;
}
