import React from 'react'
import Background from './Background'
import Header from './Header'
import ArtworkList from './ArtworkList'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = props => {

    return (
        // <Router>
            <div>
                <div>
                    <Header />
                    <Background />
                </div>
                {/* <div className="hidden">
                    <Route path="/" component={Background} />
                    <Route path="/artworks" component={ArtworkList} />
                </div> */}
            </div>
        // </Router>
    )
}


export default App