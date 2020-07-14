import React from "react";
import "./styles.css"
;
export default function Gif({ title, id, url }) {
  return (
    <div className="gif-container">
      <h4>
        {title}
      </h4>
      <img alt={title} src={url} />
    </div>
  );
}
