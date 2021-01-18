import React from "react";
import { Match } from "../match/match.jsx";

export const League = (props) => {
  const { league, matches } = props;
  return league.items.map((it, i) => {
    return (
      <div className="league" key={i}>
        <div className="title-section">
          <img
            src="https://s3-alpha-sig.figma.com/img/e3b0/73ba/2117e62a661efde3685bd03e4bfa5dcc?Expires=1612137600&Signature=FCyhFbxrcfpJauyTh6g-vc1MzK8ggDjES0zycZTVWsEwJfo1xsI11FCIQ5eU-R51FjfVCuZvf8JEqAQae~TGe35LmWZfx-9z1Q7I8X8INNwzN5i2acQG9hcGMic2Z4kPcVd0JIWhuFmio5qIorm7cM~K-LS6a1~nlS7ltcF0TTeN07F4mNw5~y3S7NVerA4NbunVZcwHwW-M3Bl46pomurX3urdUtfZv4ZRJuuKA0vlDDntfzO5iNVylFFdtAzOAk8JENNEf0~7nISYfTKwBqXjDlBbVfYhS-8~vK4rBfHyLlDhLkr5kzMMBitf5fixhhZ5cYpNrQbGAqTB4IXa2eA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
            className="country-flag"
          />
          <h3 className="league-title">
            {league.league}: {it.item}
          </h3>
        </div>
        <ul className="matches">
          {matches
            .filter((item) => {
              return item.league_id === it.id;
            })
            .map((item) => {
              return <Match match={item} key={item.id} />;
            })}
        </ul>
      </div>
    );
  });
};
