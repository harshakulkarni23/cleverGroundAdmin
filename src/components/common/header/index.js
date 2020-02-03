import React from "react";
import SignOutButton from "../../../pages/SignOut";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../utils/routes";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <Link to={ROUTES.LANDINGPAGE} className="navbar-brand">
          Cleverground
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href=""
                id="themes"
              >
                Themes <span className="caret"></span>
              </a>
              <div className="dropdown-menu" aria-labelledby="themes">
                <a className="dropdown-item" href="../default/">
                  Default
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="../cerulean/">
                  Cerulean
                </a>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="../help/">
                Help
              </a>
            </li> */}
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navbar-right">
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
