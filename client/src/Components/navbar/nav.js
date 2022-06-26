import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/search";
import "./nav.css";
export default function Nav() {
  var history = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="search-button">
          <button
            className="button-nav"
            onClick={() => history("/home/create")}
          >
            CREATE DOG
          </button>
          <Search />
        </div>

        <div>
          <svg
            className="waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
