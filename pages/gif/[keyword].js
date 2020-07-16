import { useRouter } from "next/router";
import SearcResults from "../search/[searchResults]";

export default () => {
  const router = useRouter();
  const { keyword } = router.query;

  return <SearcResults keyword={keyword} />;
};
