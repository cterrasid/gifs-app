import React from "react";
import Link from "next/link";

export default function App() {
  return (
    <section className="container">
      <header>This is a header!</header>
      <main>
        <Link href="/gif/[keyword]" as="/gif/dogs">
          Gifs de Perros
        </Link>
        <br />
        <Link href="/gif/[keyword]" as="/gif/panda">
          Gifs de Pandas
        </Link>
        <br />
        <Link href="/gif/[keyword]" as="/gif/cats">
          Gifs de Gatos
        </Link>
      </main>
      <footer>This is a footer!</footer>
    </section>
  );
}
