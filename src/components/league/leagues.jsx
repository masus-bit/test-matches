import React from "react";
import { LeagueItem } from "./league-item.jsx";

const Leagues = (props) => {
  const { league } = props;
  return (
    <aside className="leagues">
      <h4 className="leagues-title">Мои лиги</h4>
      <ul className="leagues-country-list">
        {league.map((it, i) => {
          return <LeagueItem league={it} />
        })}
      </ul>
    </aside>
  );
};
export default Leagues;
