import React from "react";
import { connect } from "react-redux";
import { fetchBackgrounds } from "../actions";
import Artwork from "./Artwork";
import RightColumns from "./RightColumns";
import LeftColumns from "./LeftColumns";
import { fetchArtworks } from "../actions/artworks";

class Background extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
    this.props.dispatch(fetchArtworks());
  }

  render() {
    {
      var oneArtwork = this.props.artworks[this.props.artworkIndex];
    }
    {
      oneArtwork = oneArtwork || "";
    }
    var divStyle = {
      top: `${this.props.vertical}%`,
      left: `${this.props.left}%`,
      width: "15%"
    };

    var asideStyle = {
      position: "absolute",
      left: "0",
      top: "0",
      /* set these so Chrome doesn't return 'auto' from getComputedStyle */
      width: "200px",
      height: "200px",
      background: "transparent",
      padding: "8px",
      backgroundImage: `url(${oneArtwork.url})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    };

    {
      var oneBackground = this.props.backgrounds[this.props.index];
    }
    {
      oneBackground = oneBackground || "";
    }
    return (
      <div className="columns">
        <div className="column is-2 " id="leftcolumn">
          <LeftColumns />
        </div>
        <div className="column is-8" id="maincontent">
          <div
            className="backgroundcontainer"
            ondragover="drag_over(event)"
            ondrop="drop(event)"
          >
            <img src={oneBackground.url} />
            <div style={divStyle} className="artworkcontainer">
              <aside
                id="txt2"
                draggable="true"
                ondragstart="drag_start(event)"
                style={asideStyle}
              />
              <img src={oneArtwork.url} />
            </div>
          </div>
        </div>
        <div className="column is-2 " id="rightcolumn">
          <RightColumns />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backgrounds: state.backgrounds,
    index: state.index,
    left: state.left,
    vertical: state.vertical,
    artworks: state.artworks,
    artworkIndex: state.artworkIndex
  };
}

export default connect(mapStateToProps)(Background);
