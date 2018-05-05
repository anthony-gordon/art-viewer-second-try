import React from 'react'
import {connect} from 'react-redux'
import {fetchBackgrounds} from '../actions'

class Background extends React.Component {

componentDidMount(){
    this.props.dispatch(fetchBackgrounds())
}



    render(){
        return (
            <div>
                Hello again!
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        backgrounds: state.backgrounds
    }
}

export default connect(mapStateToProps)(Background)