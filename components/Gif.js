import { Fragment } from "react";
import Link from "next/link";

export default function Gif({ title, id, url }) {
  return (
    <Fragment>
      <Link href="/gif/detail/[id]" as={`/gif/detail/${id}`}>
        <a className="gif">
          <h4>
            {title}
          </h4>
          <img loading="lazy" alt={title} src={url} />
        </a>
      </Link>
      <style jsx>
        {`
          .gif {
            border: 1px solid black;
            border-radius: 6px;
            text-align: center;
            text-decoration: none;
            color: black;
            display: flex;
            flex-direction: column;
            margin: 16px;
            padding: 32px;
            width: 30%;
          }

          .gif h4 {
            margin: 0;
          }

          .gif img {
            object-fit: contain;
          }
        `}
      </style>
    </Fragment>
  );
}
