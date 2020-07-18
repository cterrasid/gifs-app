import { Fragment } from "react";
import Gif from "components/Gif";

export default function ListOfGifs({ gifs }) {
  return (
    <Fragment>
      <ul className="listOfGifs">
        {gifs.map(({ id, title, url }) =>
          <li className="listOfGifs-item" key={id}>
            <Gif id={id} title={title} url={url} />
          </li>
        )}
      </ul>
      <style jsx>
        {`
          .listOfGifs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-template-rows: masonry;
            grid-gap: 16px;
            align-items: center;
            min-height: 100vh;
            margin: 0 auto;
            padding: 0;
          }

          .listOfGifs-item {
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
