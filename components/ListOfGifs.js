import { Fragment } from "react";
import Gif from "./Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <Fragment>
      <ul className="listOfGifs">
        {gifs.map(({ id, title, url }) =>
          <li className="listOfGifs-item">
            <Gif id={id} key={id} title={title} url={url} />
          </li>
        )}
      </ul>
      <style jsx>
        {`
          :root {
            --results-column: 2;
          }

          .listOfGifs {
            column-count: var(--results-column);
            column-gap: .5em;
            min-height: 100vh;
          }

          .listOfGifs-item {
            display: inline-block;
            width: 100%;
          }
        `}
      </style>
    </Fragment>
  );
}
