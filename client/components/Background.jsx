import React from 'react'
import {connect} from 'react-redux'
import {fetchBackgrounds} from '../actions'
import Artwork from './Artwork'
import RightColumns from './RightColumns'

class Background extends React.Component {

componentDidMount(){
    this.props.dispatch(fetchBackgrounds())
}

    render(){

        {var oneBackground = this.props.backgrounds[this.props.index]}
        {oneBackground =   oneBackground || ""}
        return (
            <div className="columns">
                <div className="column is-9" id="maincontent">
                    <img src={oneBackground.url} />
                    <div className="artworkcontainer">
                        < Artwork />
                        </div>
                </div>
                <div className="column is-3 " id="rightcolumn">
                    <RightColumns />
                </div>        
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        backgrounds: state.backgrounds,
        index: state.index
    }
}

export default connect(mapStateToProps)(Background)