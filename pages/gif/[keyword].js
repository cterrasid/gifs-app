import { useRouter } from "next/router";
import ListOfGifs from "../../components/ListOfGifs";

export default () => {
  const router = useRouter();
  const { keyword } = router.query;

  return <ListOfGifs keyword={keyword} />;
};
