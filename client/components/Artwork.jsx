import React from "react";
import { connect } from "react-redux";
import { fetchArtworks } from "../actions/artworks";

class Artwork extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchArtworks());
  }

  render() {
    console.log(this.props.artworks);
    {
      var oneArtwork = this.props.artworks[this.props.artworkIndex];
    }
    {
      oneArtwork = oneArtwork || "";
    }
    return (
      <div>
        <img src={oneArtwork.url} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artworks: state.artworks,
    artworkIndex: state.artworkIndex
  };
}

export default connect(mapStateToProps)(Artwork);
