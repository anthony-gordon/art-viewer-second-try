import React from "react";
import { connect } from "react-redux";
import { increaseTheIndex, decreaseTheIndex } from "../actions";
import {
  increaseTheArtworkIndex,
  decreaseTheArtworkIndex
} from "../actions/artworks";
import {
  moveTheArtworkLeft,
  moveTheArtworkRight,
  moveTheArtworkCentre
} from "../actions/positionchange";

class RightColumns extends React.Component {
  increaseIndex() {
    this.props.dispatch(
      increaseTheIndex(this.props.index, this.props.backgrounds)
    );
  }

  decreaseIndex() {
    this.props.dispatch(
      decreaseTheIndex(this.props.index, this.props.backgrounds)
    );
  }

  increaseArtworkIndex() {
    console.log("increase", this.props.artworks);
    this.props.dispatch(
      increaseTheArtworkIndex(this.props.artworkIndex, this.props.artworks)
    );
  }

  decreaseArtworkIndex() {
    this.props.dispatch(
      decreaseTheArtworkIndex(this.props.artworkIndex, this.props.artworks)
    );
  }

  moveArtworkLeft() {
    this.props.dispatch(moveTheArtworkLeft(this.props.left));
  }

  moveArtworkRight() {
    this.props.dispatch(moveTheArtworkRight(this.props.left));
  }

  moveArtworkCentre() {
    this.props.dispatch(moveTheArtworkCentre(this.props.left));
  }

  render() {
    return (
      <div>
        <div className="box">
          <h6 className="subtitle is-6">Scroll through backgrounds</h6>
          <button
            className="button is-link is-focused"
            id="backbutton"
            onClick={this.decreaseIndex.bind(this)}
          >
            Back
          </button>
          <button
            className="button is-link is-focused"
            onClick={this.increaseIndex.bind(this)}
          >
            Next
          </button>
        </div>
        <div className="box">
          <h6 className="subtitle is-6">Scroll through artworks</h6>
          <button
            className="button is-link is-focused"
            id="backbutton"
            onClick={this.decreaseArtworkIndex.bind(this)}
          >
            Back
          </button>
          <button
            className="button is-link is-focused"
            onClick={this.increaseArtworkIndex.bind(this)}
          >
            Next
          </button>
        </div>
        <div className="box" id="reposition">
          <h6 className="subtitle is-6" id="positionheader">
            Position artwork
          </h6>
          <div className="columns">
            <button id="upbutton" className="button is-link is-focused">
              ↑
            </button>
          </div>
          <div className="columns">
            <div className="column is-4" id="movearoundcontainer">
              <button
                id="leftbutton"
                className="button is-link is-focused"
                onClick={this.moveArtworkLeft.bind(this)}
              >
                ←
              </button>
            </div>
            <div className="column is-4" id="movearoundcontainer">
              <button
                id="centrebutton"
                className="button is-link is-focused"
                onClick={this.moveArtworkCentre.bind(this)}
              >
                ↻
              </button>
            </div>
            <div className="column is-4" id="movearoundcontainer">
              <button
                id="rightbutton"
                className="button is-link is-focused"
                onClick={this.moveArtworkRight.bind(this)}
              >
                →
              </button>
            </div>
          </div>
          <div className="columns">
            <button id="downbutton" className="button is-link is-focused">
              ↓
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    index: state.index,
    backgrounds: state.backgrounds,
    artworkIndex: state.artworkIndex,
    artworks: state.artworks,
    left: state.left
  };
}

export default connect(mapStateToProps)(RightColumns);
