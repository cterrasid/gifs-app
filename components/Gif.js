import React from "react";

export default function Gif({ title, id, url }) {
  return (
    <a className="gif" href={`#${id}`}>
      <h4>
        {title}
      </h4>
      <img alt={title} src={url} />

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
            width: 100%;
          }

          .gif h4 {
            margin: 0;
          }

          .gif img {
            object-fit: contain;
          }
        `}
      </style>
    </a>
  )
}
