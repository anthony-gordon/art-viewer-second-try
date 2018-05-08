import React from 'react'
import {connect} from 'react-redux'
import {fetchBackgrounds} from '../actions'
import Artwork from './Artwork'
import RightColumns from './RightColumns'
import LeftColumns from './LeftColumns'

class Background extends React.Component {

componentDidMount(){
    this.props.dispatch(fetchBackgrounds())
}

    render(){

        var divStyle = {
            top: '30%',
            left: `${this.props.left}%`,
            width: '100px'
        }

        {var oneBackground = this.props.backgrounds[this.props.index]}
        {oneBackground =   oneBackground || ""}
        return (
            <div className="columns">
                <div className="column is-2 " id="leftcolumn">
                    <LeftColumns />
                </div> 
                <div className="column is-8" id="maincontent">
                    <img src={oneBackground.url} />
                    <div style={divStyle} className="artworkcontainer">
                        < Artwork />
                        </div>
                </div>
                <div className="column is-2 " id="rightcolumn">
                    <RightColumns />
                </div>        
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        backgrounds: state.backgrounds,
        index: state.index,
        left: state.left
    }
}

export default connect(mapStateToProps)(Background)