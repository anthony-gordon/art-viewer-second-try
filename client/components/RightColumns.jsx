import React from "react";
import { connect } from "react-redux";
import { increaseTheIndex, decreaseTheIndex } from "../actions";
import {
  increaseTheArtworkIndex,
  decreaseTheArtworkIndex
} from "../actions/artworks";
import {
  makeTheArtworkBigger,
  makeTheArtworkSmaller
} from "../actions/artworkSize";

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
    this.props.dispatch(
      increaseTheArtworkIndex(this.props.artworkIndex, this.props.artworks)
    );
  }

  decreaseArtworkIndex() {
    this.props.dispatch(
      decreaseTheArtworkIndex(this.props.artworkIndex, this.props.artworks)
    );
  }

  makeArtworkBigger() {
    this.props.dispatch(makeTheArtworkBigger(this.props.width));
  }

  makeArtworkSmaller() {
    this.props.dispatch(makeTheArtworkSmaller(this.props.width));
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
          <h6 className="subtitle is-6" id="resizeheader">
            Resize artwork
          </h6>
          <button
            className="button is-link is-focused"
            id="backbutton"
            onClick={this.makeArtworkBigger.bind(this)}
          >
            +
          </button>
          <button
            className="button is-link is-focused"
            onClick={this.makeArtworkSmaller.bind(this)}
          >
            -
          </button>
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
    width: state.width
  };
}

export default connect(mapStateToProps)(RightColumns);
