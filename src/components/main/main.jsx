import React, { Fragment, useState } from "react";
import { Header } from "../header/header.jsx";
import Tabs from "../tabs/tabs.jsx";
import { connect } from "react-redux";
import { League } from "../league/league.jsx";
import { dataByDay } from "../../utils.js";

const Main = React.memo((props) => {
  const { league, matches } = props;
  const [activeTab, setActive] = useState("today");

  return (
    <Fragment>
      <Header />
      <div className="board">
        <Tabs setActive={setActive} />
        {league.map((it, i) => {
          return (
            <div className="league-wrap" key={i}>
              <League
                league={it}
                matches={
                  activeTab == "all" ? matches : dataByDay(matches, activeTab)
                }
                key={i}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
});
const mapStateToProps = (state) => {
  return {
    league: state.league,
    matches: state.matches,
  };
};
export default connect(mapStateToProps)(Main);
