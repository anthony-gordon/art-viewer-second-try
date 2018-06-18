import Draggable from "react-draggable";
import React from "react";
import { connect } from "react-redux";
import { fetchBackgrounds } from "../actions";
import Artwork from "./Artwork";
import RightColumns from "./RightColumns";
import LeftColumns from "./LeftColumns";
import { fetchArtworks } from "../actions/artworks";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,

      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      }
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  onStart() {
    console.log(this.state);
    this.setState({ activeDrags: ++this.state.activeDrags });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
    this.props.dispatch(fetchArtworks());
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    {
      var oneArtwork = this.props.artworks[this.props.artworkIndex];
    }
    {
      oneArtwork = oneArtwork || "";
    }

    {
      var oneBackground = this.props.backgrounds[this.props.index];
    }
    {
      oneBackground = oneBackground || "";
    }
    var divStyle = {
      backgroundImage: `url(${oneArtwork.url})`,
      backgroundSize: `${this.props.width}px`,
      width: `${this.props.width}px`,
      height: `${Math.round(this.props.width) * 2}px`
    };
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
            <div className="draggable">
              <Draggable {...dragHandlers}>
                <div style={divStyle} className="draggableImage" />
              </Draggable>
            </div>
            {/* <div style={divStyle} className="artworkcontainer">
              <img src={oneArtwork.url} />
            </div> */}
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
    artworkIndex: state.artworkIndex,
    width: state.width
  };
}

export default connect(mapStateToProps)(Background);
