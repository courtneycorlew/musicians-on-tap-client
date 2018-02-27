import React from 'react';
// import SettingsPane from './SettingsPane';
import styled from 'styled-components';
// import UpdateModal from './UpdateModal';
import Modal from 'simple-react-modal';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Title = styled.span `
text-transform: uppercase;
font-weight: 100;
font-size: 1.5em;
`
const Body = styled.div `
width: 80%;
margin: 5% auto;
padding: 5%;
`


export default class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            social: [],
            about: [],
            aboutId: [],
            userId: window.localStorage.getItem("currentUser"),
            showOne: false,
            showTwo: false,
            showThree: false,
            showFour: false,
            showFive: false,
            aboutAbout: [],
            aboutLocation: [],
            aboutInstruments: [],
            facebook: [],
            twitter: [],
            instagram: [],
            youtube: [],
            soundcloud: [],
            website: [],
            extraLinkOne: [],
            extraLinkTwo: [],
            extraLinkThree: [],
            socialId: [],
            username: [],
            name:[],
            videoOne: [],
            videoTwo: [],
            videoThree: [],
            videoFour: [],
            videoFive: [],
            videoId: []
        }
        
    }

    componentDidMount () {
        this.fetchUsers()
        this.fetchSocial()
        this.fetchAbout()
        this.fetchVideos()
    }

// MODAL FUNCTIONS
    showOne(){
        this.setState({showOne: true})
    }
     
    closeOne(){
    this.setState({showOne: false})
    }
    showTwo(){
        this.setState({showTwo: true})
    }
     
    closeTwo(){
    this.setState({showTwo: false})
    }
    showThree(){
        this.setState({showThree: true})
    }
     
    closeThree(){
    this.setState({showThree: false})
    }
    showFour(){
        this.setState({showFour: true})
    }
     
    closeFour(){
    this.setState({showFour: false})
    }
    showFive(){
        this.setState({showFive: true})
    }
     
    closeFive(){
        this.setState({showFive: false})
    }
//END MODAL FUNCTIONS

// FETCHING DATA
    fetchUsers = () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/signup/${this.state.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData)
            this.setState({username: logData.username})
            this.setState({name: logData.name})
           this.setState({users: logData})
        //    console.log(this.state.users)

          
           
        })
    }
    fetchSocial = () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/socialLinks/${this.state.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            // console.log(logData)
           this.setState({social: logData})
           console.log(this.state.social)
           this.setState({socialId: logData.id})
           this.setState({facebook: logData.facebook})
           this.setState({twitter: logData.twitter})
           this.setState({instagram: logData.instagram})
           this.setState({youtube: logData.youtube})
           this.setState({soundcloud: logData.soundcloud})
           this.setState({website: logData.website})
           this.setState({extraLinkOne: logData.extraLinkOne})
           this.setState({extraLinkTwo: logData.extraLinkTwo})
           this.setState({extraLinkThree: logData.extraLinkThree})
          
           
        })
    }
    fetchAbout = () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/artist/${this.state.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            // console.log(logData)
           this.setState({about: logData})
           console.log(this.state.about)
          let id = this.state.about.id
          this.setState({aboutId: id}) 
          this.setState({aboutAbout: this.state.about.about})
          this.setState({aboutLocation: this.state.about.location})   
          this.setState({aboutInstruments: this.state.about.instruments})   
          console.log(this.state)  
        })
    }
    fetchVideos = () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/videos/${this.state.userId}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            console.log(logData)
            if (logData) {
            this.setState({videoId: logData.id})
            this.setState({videoOne: logData.videoOne})
            this.setState({videoTwo: logData.videoTwo})
            this.setState({videoThree: logData.videoThree})
            this.setState({videoFour: logData.videoFour})
            this.setState({videoFive: logData.videoFive})
            }
        
      
        })
    }
//END FETCHING

// HANDLING INPUT VALUE
    handleChange = (event) => {
        // console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(event.target.value)
        // console.log(this.state.aboutAbout)

    }
//END HANDLING INPUT VALUE 


// HANDLING UPDATE SUBMIT BUTTON
    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://musicians-on-tap-server.herokuapp.com/api/artist/', {
            method: 'PUT',
            body: JSON.stringify({ 
                artist: { 
                    about: this.state.aboutAbout, 
                    location: this.state.aboutLocation, 
                    instruments: this.state.aboutInstruments, 
                    id: this.state.aboutId
                } 
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              }),
        })  .then((res) => res.json())
        .catch(err => err)
       this.closeOne()
    }
    handleSubmitSocial = (event) => {
        event.preventDefault();
        fetch('https://musicians-on-tap-server.herokuapp.com/api/socialLinks/', {
            method: 'PUT',
            body: JSON.stringify({ 
                social: {
                facebook: this.state.facebook,
                twitter: this.state.twitter,
                instagram: this.state.instagram,
                youtube: this.state.youtube,
                soundcloud: this.state.soundcloud,
                website: this.state.website,
                extraLinkOne: this.state.extraLinkOne,
                extraLinkTwo: this.state.extraLinkTwo,
                extraLinkThree: this.state.extraLinkThree, 
                id: this.state.socialId
                }  
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              }),
        })  .then((res) => res.json())
        .catch(err => err)
       
    }
    handleSubmitUser = (event) => {
        event.preventDefault();
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/signup/`, {
            method: 'PUT',
            body: JSON.stringify({ 
                user: {
                username: this.state.username,
                name: this.state.name, 
                id: this.state.userId 
                }  
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              }),
        })  .then((res) => res.json())
        .catch(err => err)
       
    }
    handleSubmitVideo = (event) => {
        event.preventDefault();
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/videos/`, {
            method: 'PUT',
            body: JSON.stringify({ 
                videos: {
                videoOne: this.state.videoOne,
                videoTwo: this.state.videoTwo,
                videoThree: this.state.videoThree,
                videoFour: this.state.videoFour, 
                id: this.state.videoId
                }  
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
              }),
        })  .then((res) => res.json())
        .catch(err => err)
       
    }
// END UPDATE SUBMIT BUTTON
  

// DELETING PROFILE
    deleteUser = () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/signup/${this.state.userId}`, {
            method: 'DELETE',
            body: JSON.stringify({
                id: this.state.userId
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        }).then((res) => res.json())
        .catch(err => err)
    }
    deleteArtist= () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/artist/${this.state.userId}`, {
            method: 'DELETE',
            body: JSON.stringify({
                owner: this.state.userId,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }) 
        }).then((res) => res.json())
        .catch(err => err)  
    }

    deleteSocial= () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/socialLinks/${this.state.userId}`,{
            method: 'DELETE',
            body: JSON.stringify({
                owner: this.state.userId
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        }).then((res) => res.json())
        .catch(err => err)
    }

    deleteVideos = () => {
        fetch(`https://musicians-on-tap-server.herokuapp.com/api/videos/${this.state.userId}`, {
            method: 'DELETE',
            body: JSON.stringify({
                owner: this.state.userId
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        }).then((res) => res.json())
        .catch(err => err)
    }
    
    userDelete = () => {
    
        if(
            window.confirm('Are you sure you want to delete? Your data will be deleted.')) 
            {
                this.deleteUser()
                this.deleteArtist()
                this.deleteSocial()
                this.deleteVideos()
            
                localStorage.removeItem('token');
                localStorage.removeItem('currentUser')
                window.location.href = '/'
            }
        }
// END DELETE



    render() {
        // console.log(this.state.users)
        // console.log('about id: ', this.state.aboutId)
        
        return (
            <div className="main">
                <div className="mainDiv">
                    <Body>
                    {/* User Information */}
                        <h3>User Information</h3>
                       
                        <button onClick={this.userDelete}>DELETE ACCOUNT </button>
                     
                        {/*MODAL */}

                            <div>
                            <a onClick={this.showThree.bind(this)}>Edit</a>
                            <Modal show={this.state.showThree} onClose={this.closeThree.bind(this)}>
                                <h3>Edit User Information</h3>
                                <hr />
                                    <Form onSubmit={this.handleSubmitUser} >
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input id="username" type="text" name="username" onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="name">Name</Label>
                                            <Input id="name" type="text" name="name" onChange={this.handleChange} />
                                        </FormGroup>
                                        
                                        <Button  type="submit" color="primary"> Submit </Button>
                                    </Form>
                                </Modal>
                            </div>

                        {/* END MODAL */}
                        <div> 
                            <Title> Username:</Title> 
                            <span> {this.state.username}</span>
                        </div>
                        <div> 
                            <Title> Name: </Title>
                            <span> {this.state.name} </span>
                        </div>
                        <br />
                        <h3>User About</h3>
                        {/*MODAL */}

                            <div>
                            <a onClick={this.showOne.bind(this)}>Edit</a>
                            <Modal show={this.state.showOne} onClose={this.closeOne.bind(this)}>
                                <h3>Edit User Information</h3>
                                <hr />
                                    <Form onSubmit={this.handleSubmit} >
                                        <FormGroup>
                                            <Label for="about">About</Label>
                                            <Input id="about" type="text" name="aboutAbout" onChange={this.handleChange} />
                                        </FormGroup>
                                        {/* location */}
                                        <FormGroup>
                                            <Label for="location">Location</Label>
                                            <Input id="location" type="text" name="aboutLocation" onChange={this.handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="instruments">Instruments</Label>
                                            <Input id="instruments" type="text" name="aboutInstruments" onChange={this.handleChange} />
                                        </FormGroup>
                                        <Button  type="submit" color="primary"> Submit </Button>
                                    </Form>
                                </Modal>
                            </div>

                        {/* END MODAL */}
                        <div> 
                            <Title> About: </Title>
                            <span> {this.state.aboutAbout} </span>
                        </div>
                        <div> 
                            <Title> Location: </Title>
                            <span> {this.state.aboutLocation} </span>
                        </div>
                        <div> 
                            <Title> Instruments: </Title>
                            <span> {this.state.aboutInstruments} </span>
                        </div>
                    {/* End User Information */}
                        <br />
                    {/* Social */}
                        <h3>Social Media Links</h3>

                        {/*MODAL */}

                        <div>
                        <a onClick={this.showTwo.bind(this)}>Edit</a>
                        <Modal show={this.state.showTwo} onClose={this.closeTwo.bind(this)}>
                        <h3>Edit your social links</h3>
                        <hr />
                        <Form onSubmit={this.handleSubmitSocial} >
                        <FormGroup>    
                            <Label for="facebook">Facebook</Label>
                            <Input id="facebook" type="text" name="facebook" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup> 
                            <Label for="twitter">Twitter</Label>   
                            <Input id="twitter" type="text" name="twitter"  onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup> 
                            <Label for="instagram">Instagram</Label>   
                            <Input id="instagram" type="text" name="instagram"  onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup> 
                            <Label for="youtube">YouTube</Label>   
                            <Input id="youtube" type="text" name="youtube" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup> 
                            <Label for="soundcloud">Soundcloud</Label>   
                            <Input id="soundcloud" type="text" name="soundcloud" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>  
                            <Label for="website">Website</Label>  
                            <Input id="website" type="text" name="website"  onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup> 
                            <Label for="extraLinkOne">Extra Link</Label>   
                            <Input id="extraLinkOne" type="text" name="extraLinkOne"  onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup> 
                            <Label for="extraLinkTwo">Extra Link</Label>   
                            <Input id="extraLinkTwo" type="text" name="extraLinkTwo"  onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>  
                            <Label for="extraLinkThree">Extra Link</Label>  
                            <Input id="extraLinkThree" type="text" name="extraLinkThree"  onChange={this.handleChange} />
                        </FormGroup>
                        
                        
                    
                        <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                        </Modal>
                        </div>

                        {/* END MODAL */}
                  
                        <div> 
                            <Title> Facebook </Title>
                            <span> {this.state.facebook} </span>
                        </div>
                        <div> 
                            <Title> Twitter:</Title>
                            <span> {this.state.twitter} </span>
                        </div>
                        <div> 
                            <Title> Instagram: </Title>
                            <span> {this.state.instagram} </span>
                        </div>
                        <div> 
                            <Title> YouTube: </Title>
                            <span> {this.state.youtube} </span>
                        </div>
                        <div> 
                            <Title> SoudCloud: </Title>
                            <span> {this.state.soundcloud} </span>
                        </div>
                        <div> 
                            <Title> Website: </Title>
                            <span> {this.state.website} </span>
                        </div>
                        <div> 
                            <Title> Extra Link: </Title>
                            <span> {this.state.extraLinkOne} </span>
                        </div>
                        <div> 
                            <Title> Extra Link: </Title>
                            <span> {this.state.extraLinkTwo} </span>
                        </div>
                        <div> 
                            <Title> Extra Link: </Title>
                            <span> {this.state.extraLinkThree} </span>
                        </div>
                    {/* End Social */}
                        <br />

                    {/* Video */}
                        <h3>Video Links</h3>
                       {/*MODAL */}
                        <div>   
                        <a onClick={this.showFour.bind(this)}>Edit</a>                        
                            <Modal show={this.state.showFour} onClose={this.closeFour.bind(this)}>
                                <h3>Edit Video URLs</h3>
                                <hr />
                                <Form onSubmit={this.handleSubmitVideo} >
                                <FormGroup>
                                    <Label for="videoOne">Video URL</Label>
                                    <Input id="videoOne" type="text" name="videoOne" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="videoTwo">Video URL</Label>
                                    <Input id="videoTwo" type="text" name="videoTwo" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="videoThree">Video URL</Label>
                                    <Input id="videoThree" type="text" name="videoThree" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="videoFour">Video URL</Label>
                                    <Input id="videoFour" type="text" name="videoFour" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="videoFive">Video URL</Label>
                                    <Input id="videoFive" type="text" name="videoFive" onChange={this.handleChange} />
                                </FormGroup>
                                    <Button  type="submit" color="primary"> Submit </Button>
                                </Form>
                            </Modal>
                        </div>

                        {/* END MODAL */}
                   



                        <div> 
                                <Title> Video One: </Title>
                                <span> {this.state.videoOne} </span>
                            </div>
                            <div> 
                                <Title> Video Two: </Title>
                                <span> {this.state.videoTwo} </span>
                            </div>
                            <div> 
                                <Title> Video Three: </Title>
                                <span> {this.state.videoThree} </span>
                            </div>
                            <div> 
                                <Title> Video Four: </Title>
                                <span> {this.state.videoFour} </span>
                            </div>
                            <div> 
                                <Title> Video Five: </Title>
                                <span> {this.state.videoFive} </span>
                            </div>
                    {/* End Video */}

                    </Body>

                </div>
            </div>
        )
    }
}