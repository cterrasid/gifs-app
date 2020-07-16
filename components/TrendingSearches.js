import { useState, useEffect } from "react";
import getTrendingTermsService from "services/getTrendingTermsService";
import ListOfCategories from "components/ListOfCategories";
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);
  return <ListOfCategories name="Trends" options={trends} />;
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({distance: "100px"});

  return (
    <section ref={fromRef}>
      {isNearScreen ? <TrendingSearches /> : null}
    </section>
  );
}
