import { useState, useEffect } from "react";
import getTrendingTermsService from "services/getTrendingTermsService";
import ListOfCategories from "components/ListOfCategories";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTermsService().then(setTrends);
  }, []);
  return <ListOfCategories name="Trends" options={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = entries => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px"
    });

    observer.observe(document.getElementById("LazyTrending"));
  });
  return (
    <section id="LazyTrending">
      {show ? <TrendingSearches /> : null}
    </section>
  );
}
