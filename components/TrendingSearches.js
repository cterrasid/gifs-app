import { useState, useEffect, useRef } from "react";
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
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px"
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });
  return (
    <section ref={elementRef}>
      {show ? <TrendingSearches /> : null}
    </section>
  );
}
