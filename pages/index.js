import Router from "next/router";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

export default function Home() {
  const { gifs } = useGifs();

  const handleSubmit = ({ keyword }) => {
    Router.push(`/search/[searchResults]`, `/search/${keyword}`);
  };

  return (
    <section className="container">
      <header>This is a header!</header>
      <main>
        <SearchForm onSubmit={handleSubmit} />
        <section>
          <h3>Última Búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </section>
        <section>
          <TrendingSearches />
        </section>
      </main>
      <footer>This is a footer!</footer>
    </section>
  );
}
