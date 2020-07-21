import { Fragment, memo } from "react";
import Link from "next/link";

function Gif({ title, id, url }) {
  return (
    <Fragment>
      <section className="gif">
        <Link href="/gif/detail/[id]" as={`/gif/detail/${id}`}>
          <a className="gif-link">
            <h4>
              {title}
            </h4>
            <img loading="lazy" alt={title} src={url} />
          </a>
        </Link>
      </section>
      <style jsx>
        {`
          .gif {
            margin-bottom: .5em;
          }

          .gif h4 {
            background: rgba(0, 0, 0, .3);
            bottom: 0;
            font-size: 12px;
            color: #fff;
            margin: 0;
            position: absolute;
          }

          .gif img {
            width: 100%;
            object-fit: contain;
            vertical-align: top;
          }

          .gif-link {
            color: #000;
            display: block;
            text-decoration: none;
            position: relative;
            width: 100%;
          }
        `}
      </style>
    </Fragment>
  );
}

export default memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
