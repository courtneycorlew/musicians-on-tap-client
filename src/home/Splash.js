import React from 'react';
// import ArtistSetup from '../workouts/ArtistSetup';
import '../App.css'
// import SocialLinks from '../workouts/SocialLinks'

class Splash extends React.Component{
   token = this.props.sessionToken
    render(){
        return (
             <div>
                <div>
                {/* <Router>
                <Sidebar />
                </Router> */}
                {/* <ArtistSetup token={this.props.sessionToken} /> */}
                {/* <SocialLinks token={this.props.sessionToken} /> */}
                
          
                </div>
            </div>
        )
    }
}

export default Splash;