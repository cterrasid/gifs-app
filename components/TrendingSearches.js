import { useState, useEffect } from "react";
import getTrendingTermsService from "../services/getTrendingTermsService";
import ListOfCategories from "../components/ListOfCategories";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);
  return <ListOfCategories name="Trends" options={trends} />;
}
