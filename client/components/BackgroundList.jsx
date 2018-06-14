import React from "react";
import { connect } from "react-redux";
import { fetchBackgrounds, deleteBackgroundRequest } from "../actions";
import { Link } from "react-router-dom";

class BackgroundList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchBackgrounds());
  }

  render() {
    return (
      <div>
        <div id="pictures" className="columns is-multiline">
          {this.props.backgrounds.map(background => {
            return (
              <div className="column is-one-third">
                <img src={background.url} />

                <button
                  id="deletebutton"
                  onClick={() =>
                    this.props.dispatch(deleteBackgroundRequest(background))
                  }
                  className="button is-link is-focused"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <Link to="/play">
          <a className="button is-white" id="returnbutton">
            Return
          </a>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backgrounds: state.backgrounds,
    backgroundIndex: state.backgroundIndex
  };
}

export default connect(mapStateToProps)(BackgroundList);
