import { Fragment } from "react";
import Category from "./Category";

export default function ListOfCategories({ name, options = [] }) {
  return (
    <Fragment>
      <h3>
        {name}
      </h3>
      <ul>
        {options.map((option, index) =>
          <Category key={index} option={option} name={name} />
        )}
      </ul>
    </Fragment>
  );
}
