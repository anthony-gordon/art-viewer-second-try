import React from 'react'
import {connect} from 'react-redux'
import {fetchBackgrounds} from '../actions'

class Background extends React.Component {

componentWillReceiveProps(nextProps) {
    this.timeout(nextProps)
    console.log("CWRP", nextProps.backgrounds)
}


componentDidMount(){
    this.props.dispatch(fetchBackgrounds())
}



    render(){
        return (
            <div>
                Hello again!
                <button>Click me</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("background", state.backgrounds)
    return {
        backgrounds: state.backgrounds
    }
}

export default connect(mapStateToProps)(Background)