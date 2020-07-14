import React from "react";
import ListOfGif from "../components/ListOfGif";

export default function App() {
  return (
    <section className="container">
      <header>This is a header!</header>
      <main>
        <ListOfGif keyword="dwight" />
      </main>
      <footer>This is a footer!</footer>
    </section>
  );
}
