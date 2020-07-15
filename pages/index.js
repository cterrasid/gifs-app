import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

export default function App() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    Router.push(`/gif/${keyword}`);
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
        <h3>Los gifs más populares</h3>
        <Link href="/gif/[keyword]" as="/gif/dogs">
          <a>Gifs de Perros</a>
        </Link>
        <br />
        <Link href="/gif/[keyword]" as="/gif/panda">
          <a>Gifs de Pandas</a>
        </Link>
        <br />
        <Link href="/gif/[keyword]" as="/gif/cats">
          <a>Gifs de Gatos</a>
        </Link>
      </main>
      <footer>This is a footer!</footer>
    </section>
  );
}
