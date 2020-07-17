import { Fragment } from "react";
import Gif from "components/Gif";

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
            --results-columns: 2;
          }

          .listOfGifs {
            column-count: var(--results-columns);
            column-gap: .5em;
            min-height: 100vh;
            margin: 0 auto;
            padding: 0;
          }

          .listOfGifs-item {
            -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
            page-break-inside: avoid; /* Firefox */
            break-inside: avoid; /* IE 10+ */
            background-color: #eee;
            display: inline-block;
            width: 100%;
          }

          @media (min-width: 600px) {
            :root {
              --results-columns: 3;
            }
          }

          @media (min-width: 800px) {
            :root {
              --results-columns: 4;
            }
          }
        `}
      </style>
    </Fragment>
  );
}
