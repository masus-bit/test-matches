import React, { useState } from "react";
import { Menu } from "../menu/menu.jsx";

export const Header = () => {
  const [menuActive, setMenu] = useState(false);
  return (
    <React.Fragment>
      <Menu menuActive={menuActive} setMenu={setMenu} />
      <div className="header-board">
        <div className="burger" onClick={() => setMenu(true)}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#0C79A2" />
            <line
              x1="9"
              y1="13"
              x2="31"
              y2="13"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="9"
              y1="20"
              x2="31"
              y2="20"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="9"
              y1="27"
              x2="31"
              y2="27"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="right-section">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2939 12.5786H13.3905L13.0703 12.2699C14.191 10.9663 14.8656 9.27387 14.8656 7.43282C14.8656 3.32762 11.538 0 7.43282 0C3.32762 0 0 3.32762 0 7.43282C0 11.538 3.32762 14.8656 7.43282 14.8656C9.27387 14.8656 10.9663 14.191 12.2699 13.0703L12.5786 13.3905V14.2939L18.2962 20L20 18.2962L14.2939 12.5786ZM7.43282 12.5786C4.58548 12.5786 2.28702 10.2802 2.28702 7.43282C2.28702 4.58548 4.58548 2.28702 7.43282 2.28702C10.2802 2.28702 12.5786 4.58548 12.5786 7.43282C12.5786 10.2802 10.2802 12.5786 7.43282 12.5786Z"
              fill="#1E99C7"
            />
          </svg>

          <button className="login">Войти</button>
        </div>
      </div>
    </React.Fragment>
  );
};
