import React, { useState } from "react";

export const LeagueItem = (props) => {
  const { league } = props;
  const [activeLeague, setLeague] = useState(false);
  return (
    <li
      className="leagues-country-item"
      onClick={() => {
        !activeLeague ? setLeague(true) : setLeague(false);
      }}
    >
      <div className="triangle-wrap">
        {league.league}
        {!activeLeague ? (
          <svg
            className="triangle"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 5L0 0L9 0L4.5 5Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            className="triangle"
            width="9"
            height="5"
            viewBox="0 0 9 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 0L9 5H0L4.5 0Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <ul className={`leagues-list ${activeLeague ? "visible" : null}`}>
        {league.items.map((item) => {
          return (
            <li className="leagues-item">
              {item.item}{" "}
              <svg
                className="close-cross"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.22964 4.30032C5.09857 4.43138 4.89065 4.43138 4.77069 4.30032L1.56828 1.0983C1.43722 0.967233 1.2293 0.967233 1.10934 1.0983C0.978272 1.22937 0.978272 1.43729 1.10934 1.55725L4.31175 4.7597C4.44281 4.89077 4.44281 5.09869 4.31175 5.21866L1.0983 8.43171C0.967234 8.56278 0.967234 8.7707 1.0983 8.89066C1.22936 9.02173 1.43728 9.02173 1.55724 8.89066L4.75965 5.68821C4.89072 5.55714 5.09864 5.55714 5.2186 5.68821L8.43161 8.9017C8.56267 9.03277 8.77059 9.03277 8.89055 8.9017C9.02162 8.77063 9.02162 8.56271 8.89055 8.44275L5.69929 5.22926C5.56823 5.09819 5.56823 4.89027 5.69929 4.77031L8.9017 1.56785C9.03277 1.43679 9.03277 1.22886 8.9017 1.1089C8.77064 0.977835 8.56314 0.977835 8.43165 1.09823L5.22964 4.30032Z"
                  stroke="#858585"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
