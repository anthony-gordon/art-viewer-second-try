import React from 'react'
import {connect} from 'react-redux'
import {fetchBackgrounds, increaseTheIndex, decreaseTheIndex} from '../actions'

class Background extends React.Component {

componentDidMount(){
    this.props.dispatch(fetchBackgrounds())
}

increaseIndex(){
    this.props.dispatch(increaseTheIndex(this.props.index, this.props.backgrounds))
}

decreaseIndex(){
    this.props.dispatch(decreaseTheIndex(this.props.index, this.props.backgrounds))
}

    render(){
        console.log(this.props.backgrounds)
        {var oneBackground = this.props.backgrounds[this.props.index]}
        {oneBackground =   oneBackground || ""}
        return (
            <div className="columns">
                <div className="column is-9" id="maincontent">
                    <img src={oneBackground.url} />
                </div>
                <div className="column is-3 " id="rightcolumn">
                    <button className="button is-link is-focused" id="backbutton" onClick={this.decreaseIndex.bind(this)}>Back</button>
                    <button className="button is-link is-focused" onClick={this.increaseIndex.bind(this)}>Next</button>
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