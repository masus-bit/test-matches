import React, { useState } from "react";
import { connect } from "react-redux";
const Tabs = React.memo((props) => {
  const { capacity, setActive } = props;
  const [activeTab, setTab] = useState("today");
  return (
    <div className="tabs-wrap">
      <div
        className={`tabs-item ${activeTab == "today" ? "active-tab" : null}`}
        onClick={() => {
          setTab("today");
          setActive("today");
        }}
      >
        <p className="tabs-item__title">Сегодня</p>
        <p className="capacity">{capacity.today}</p>
      </div>
      <div
        className={`tabs-item ${activeTab == "tomorrow" ? "active-tab" : null}`}
        onClick={() => {
          setTab("tomorrow");
          setActive("tomorrow");
        }}
      >
        <p className="tabs-item__title">Завтра</p>
        <p className="capacity">{capacity.tomorrow}</p>
      </div>
      <div
        className={`tabs-item ${activeTab == "all" ? "active-tab" : null}`}
        onClick={() => {
          setTab("all");
          setActive("all");
        }}
      >
        <p className="tabs-item__title">Все матчи</p>
        <p className="capacity">{capacity.all}</p>
      </div>
      <svg
      className="calendar"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.25 2.82565H1V20.1632H19.25V2.82565Z"
          fill="white"
          stroke="#1E99C7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M1 7.38815H19.25H1Z" fill="white" />
        <path
          d="M1 7.38815H19.25"
          stroke="#1E99C7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5.5625 1V4.65V1Z" fill="white" />
        <path
          d="M5.5625 1V4.65"
          stroke="#1E99C7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14.6875 1V4.65V1Z" fill="white" />
        <path
          d="M14.6875 1V4.65"
          stroke="#1E99C7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.38733 13.0786L9.75307 15.6L12.8623 10.125" fill="white" />
        <path
          d="M7.38733 13.0786L9.75307 15.6L12.8623 10.125"
          stroke="#1E99C7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
});
const mapStateToProps = (state) => {
  return {
    capacity: state.capacity,
  };
};
export default connect(mapStateToProps)(Tabs);
