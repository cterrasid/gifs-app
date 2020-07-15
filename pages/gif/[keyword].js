import { useRouter } from "next/router";
import SearcResults from "../searchResults";

export default () => {
  const router = useRouter();
  const { keyword } = router.query;

  return <SearcResults keyword={keyword} />;
};
