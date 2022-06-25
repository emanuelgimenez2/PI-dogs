import React, { Fragment } from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <Fragment>
      <div className="container-footer">
        <div>
          <h2>Si te gusto, puedes contactarme </h2>
        </div>
        <ul className="list-footer">
          <li className="list">
            <a className="red-footer-tw" href="https://twitter.com/">
              Twitter
            </a>
          </li>
          <li className="list">
            <a className="red-footer-tw" href="VFVBFBCFB@gmail.com">
              Email
            </a>
          </li>
          <li className="list">
            <a className="red-footer-tw" href="https://github.com/">
              Github
            </a>
          </li>
          
        </ul>
      </div>
    </Fragment>
  );
}
