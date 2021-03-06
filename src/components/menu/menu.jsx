import React from "react";

export const Menu = (props) => {
  const { menuActive, setMenu } = props;
  return (
    <div className={`menu ${menuActive ? "menu-visible" : null}`}>
      <div className="menu-header">
        <h4 className="menu-title">Меню</h4>
        <h4 className="matches-time">Расписание матчей</h4>
        <svg
          onClick={() => setMenu(false)}
          className="cross"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.93057 8.18809C9.68482 8.43384 9.29497 8.43384 9.07005 8.18809L3.06553 2.18431C2.81978 1.93856 2.42993 1.93856 2.20501 2.18431C1.95926 2.43006 1.95926 2.81992 2.20501 3.04485L8.20952 9.04944C8.45527 9.29519 8.45527 9.68505 8.20952 9.90998L2.18431 15.9345C1.93856 16.1802 1.93856 16.5701 2.18431 16.795C2.43006 17.0407 2.81991 17.0407 3.04483 16.795L9.04935 10.7904C9.2951 10.5446 9.68495 10.5446 9.90987 10.7904L15.9343 16.8157C16.18 17.0614 16.5699 17.0614 16.7948 16.8157C17.0405 16.5699 17.0405 16.1801 16.7948 15.9552L10.8112 9.92986C10.5654 9.68411 10.5654 9.29425 10.8112 9.06932L16.8157 3.06472C17.0614 2.81897 17.0614 2.42912 16.8157 2.20419C16.5699 1.95844 16.1809 1.95844 15.9343 2.18418L9.93057 8.18809Z"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="3"
          />
        </svg>
      </div>

      <ul className="menu-list">
        <li className="menu-item">LIVE</li>
        <li className="menu-item">Результаты</li>
        <li className="menu-item">Расписание</li>
        <li className="menu-item">Прогнозы</li>
      </ul>
    </div>
  );
};
