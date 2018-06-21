import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Background from "./Background";
import Header from "./Header";
import ArtworkList from "./ArtworkList";
import BackgroundList from "./BackgroundList";

const App = props => {
  return (
    <Router>
      <div>
        <div>
          <h1>
            <img src="abc" />
          </h1>
          <Header />
        </div>
        <div className="hidden">
          <Route path="/play" component={Background} />
          <Route path="/artworks" component={ArtworkList} />
          <Route path="/backgrounds" component={BackgroundList} />
        </div>
      </div>
    </Router>
  );
};

export default App;
