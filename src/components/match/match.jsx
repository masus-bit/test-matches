import React, { useState } from "react";
import { zeroFirst } from "../../utils";

export const Match = (props) => {
  const { match } = props;
  const [favorite, setFavorite] = useState(false);
  return (
    <li className="match-item">
      <div className="match-left">
        <p className="match-time">
          {zeroFirst(
            new Date(match.time).getHours(),
            new Date(match.time).getMinutes()
          )}
        </p>
        <p className="match-name">
          {match.name} {match.score != null ? ": " + match.score : null}
        </p>
      </div>
      <svg
        onClick={() => {
          !favorite ? setFavorite(true) : setFavorite(false);
        }}
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
          fill={!favorite ? "#C4C4C4" : "#FFC700"}
        />
      </svg>
      <p className="status hidden">{match.status}</p>
      <a href={match.link} className="adv">Подробнее</a>

    </li>
  );
};
