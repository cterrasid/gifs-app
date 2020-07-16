import { useRouter } from "next/router";
import { useGifsContext } from "../../../context/GifsContext";
import Gif from "../../../components/Gif";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const { gifs } = useGifsContext();

  const gif = gifs.find(singleGif => singleGif.id === id);
  const { title, url } = gif;

  return <Gif id={id} title={title} url={url} />;
};
