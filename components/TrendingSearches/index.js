import dynamic from "next/dynamic";
import useNearScreen from "hooks/useNearScreen";

const TrendingSearches = dynamic(() => import("./trending"), {
  loading: () => <p>Loading trending searches...</p>
});

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "0px" });

  return (
    <section ref={fromRef}>
      {isNearScreen ? <TrendingSearches /> : null}
    </section>
  );
}
