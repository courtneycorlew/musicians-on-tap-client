import React from 'react';
import { Component } from 'react';
import Search from '../workouts/Search';
import MusicianList from '../artist_list/MusicianList'
import _ from 'lodash';
import styled from 'styled-components';

const Header = styled.h1`
text-align: center;
text-transform: uppercase;
`



export default class Dashboard extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            artists: [],
            filteredArtists: [],
            findByLocation: '',
            users: [],
        }
        
       
        this.filterUpdate = this.filterUpdate.bind(this)
        console.log(this.state.filteredArtists)
    }

    componentDidMount(){
        console.log('will mount')
        this.fetchArtists()
        this.fetchUsers()
      
    }

    fetchArtists = () => {
        
        fetch("http://localhost:3001/api/artist", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            // console.log(logData)
            this.setState({artists: logData, filteredArtists: logData})
           
        })
    }

    fetchUsers = () => {
        fetch("http://localhost:3001/api/signup", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            // console.log(logData)
           this.setState({users: logData})
           console.log(this.state.users)
           this.newCard()
           console.log(this.state.filteredArtists)
           
        })
    }

    filterUpdate(value) {
       
        let filteredUsers = _.filter(this.state.artists, p => _.includes(p.location, value))
        this.setState({
            filteredArtists: filteredUsers
        })
        
       console.log(value)
     
       
    }

// Matching id of users to owner id of filtered artists
   newCard = () => {
    let cardList = this.state.filteredArtists
    console.log(cardList)
    for(let card in cardList) {
        // console.log(cardList[card])
        let user = _.find(this.state.users, {'id': cardList[card].owner})
        // console.log('user',user)  
        cardList[card].email = user.username
        cardList[card].userName = user.name
        // cardList[card].selectedUserId = user.id
        // console.log('id', cardList[card].selectedUserId)
        // window.localStorage.setItem("selectedUser", cardList[card].selectedUserId)
     
     }
     this.setState({filteredArtists: cardList})
     console.log(this.state.filteredArtists)
     
    }
 
   
    
    render() {
        
        return(
            
            <div className="main">
                <div className="mainDiv">
                    <Header>Local Musicians</Header>
                    <Search search={this.state.findByLocation}
                    filterUpdate={this.filterUpdate} /> 
                   <br/>
                  {/* <button onClick={this.fetchUsers} > Click to search for musicians! </button> */}
                  <MusicianList cards={this.state.filteredArtists} users={this.state.users}/>
          
                   
                </div>
            </div>
        )
    }
}


