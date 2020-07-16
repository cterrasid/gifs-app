import React, { useState } from "react";
import Router from "next/router";
import useGifs from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const { isLoading, gifs } = useGifs({ keyword });

  const handleSubmit = e => {
    e.preventDefault();
    Router.push(`/search/[searchResults]`, `/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <section className="container">
      <header>This is a header!</header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" value={keyword} onChange={handleChange} />
          <button>Buscar</button>
        </form>
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
