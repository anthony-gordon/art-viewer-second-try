import React from 'react'
import {connect} from 'react-redux'
import {postUrlRequest} from '../actions/index'
import {fetchBackgrounds} from '../actions'
import {fetchArtworks, postArtworkRequest} from '../actions/artworks'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'


class LeftColumns extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUrl: {},
            newArtwork: {}
        }
    }

submitUrl(e) {
    console.log("submit", this.state.newUrl)
    e.preventDefault()
    e.target.reset()
    this.props.dispatch(postUrlRequest(this.state.newUrl))
    this.props.dispatch(fetchBackgrounds())
}

updateUrl(e){
    let newUrl = this.state.newUrl
    newUrl[e.target.name] = e.target.value
    this.setState({newUrl})
}

submitArtwork(e) {
    console.log("submit", this.state.newArtwork)
    e.preventDefault()
    e.target.reset()
    this.props.dispatch(postArtworkRequest(this.state.newArtwork))
    this.props.dispatch(fetchArtworks())
}

updateArtwork(e){
    let newArtwork = this.state.newArtwork
    newArtwork[e.target.name] = e.target.value
    this.setState({newArtwork})
}

    render(){
        return (
    <div>
        <div id="uploadingimagebox" className="box">
            <h6 className="subtitle is-6">Upload background image</h6>
            <form onSubmit={this.submitUrl.bind(this)}>       
                <input className="input" type='text'placeholder="Image URL" name='url' onChange={this.updateUrl.bind(this)} />
            
                <input id="submitUpload" className="button is-link is-focused" type='submit' />    
            </form>
        </div>
        <div id="uploadingimagebox" className="box">
            <h6 className="subtitle is-6">Upload artwork image</h6>
            <form onSubmit={this.submitArtwork.bind(this)}>       
                <input className="input" type='text'placeholder="Image URL" name='url' onChange={this.updateArtwork.bind(this)} />
            
                <input id="submitUpload" className="button is-link is-focused" type='submit' />    
            </form>
        </div>
        <div id="uploadingimagebox" className="box">
            <h6 className="subtitle is-6">View all artwork images</h6>
            {/* <Link to="/artworks" >
                <a className="button is-link is-focused" id="backbutton"
                //  onClick={this.makeBackgroundInvisible.bind(this)}
                 >Back</a>
            </Link> */}
        </div>
    </div>
        )
    }
}

function mapStateToProps(state){
    return {
        index: state.index,
        backgrounds: state.backgrounds,
        artworkIndex: state.artworkIndex,
        artworks: state.artworks
    }
}

export default connect(mapStateToProps)(LeftColumns)








