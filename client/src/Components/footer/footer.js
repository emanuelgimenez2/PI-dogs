import React, { Fragment } from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <Fragment>
      <div className="container-footer">
        <ul className="list-footer">
          <li className="list">
            <a className="red-footer-tw" href="https://twitter.com/">
              Twitter
            </a>
          </li>
          <li className="list">
            <a className="red-footer-tw" href="https://codepen.io/">
              Codepen
            </a>
          </li>
          <li className="list">
            <a className="red-footer-tw" href="VFVBFBCFB@gmail.com">
              Email
            </a>
          </li>
          <li className="list">
            <a className="red-footer-tw" href="https://dribbble.com/">
              Dribbble
            </a>
          </li>
          <li className="list">
            <a className="red-footer-tw" href="https://github.com/">
              Github
            </a>
          </li>
          <li>
            <p>👋</p>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
