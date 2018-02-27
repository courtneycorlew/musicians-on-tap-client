import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './home/Navbar';
import Splash from './home/Splash';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css'
import Sidebar from './home/Sidebar';
class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: ''
    }

    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  logout(){
    this.setState({ sessionToken: '' });
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser')
    window.location.href = '/'
  }

  protectedViews() {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <div>
        <SiteBar clickLogout={this.logout}/>
        
    
        <Route>
        <Splash  exact path="/" sessionToken={this.state.sessionToken} />
        </Route>
        <Sidebar />
        
        </div>
      )
    } else {
      return (
        <Route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }

  render() {
    return (
      <Router>
        <div>
       
          {/* <SiteBar clickLogout={this.logout}/> */}
          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;