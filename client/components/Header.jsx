import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <Link to="/play">
        <div className="v-title">
          <div id="homegallery">home gallery</div>
          <div id="byanthonygordon">
            <a href="https://github.com/anthony-gordon">by anthony gordon</a>
          </div>
        </div>
      </Link>
      <a href="https://github.com/anthony-gordon">
        <img
          className="github"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
        />
      </a>
    </div>
  );
};

export default Header;
