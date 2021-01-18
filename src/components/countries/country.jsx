import React from "react";

export const Countries = (props) => {
  const { country } = props;
  return (
    <aside className="countries">
      <h5 className="countries-title">Страны</h5>
      <ul className="country-list">
        {country.map((it) => {
          return <li className="country-item">{it.country}</li>;
        })}
      </ul>
    </aside>
  );
};
