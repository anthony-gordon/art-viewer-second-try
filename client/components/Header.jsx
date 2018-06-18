import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

const Header = props => {
  return (
    <Link to="/play">
      <div className="v-title">
        <div id="homegallery">home gallery</div>
        <div id="byanthonygordon">by anthony gordon</div>
      </div>
    </Link>
  );
};

export default Header;
