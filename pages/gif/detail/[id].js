import { useRouter } from "next/router";
import useGlobalGifs from "hooks/useGlobalGifs";
import Gif from "components/Gif";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const gifs = useGlobalGifs();

  const gif = gifs.find(singleGif => singleGif.id === id);
  const { title, url } = gif;

  return <Gif id={id} title={title} url={url} />;
};
