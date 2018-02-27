import React from 'react';
import { Jumbotron, Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ReactPlayer from 'react-player';
import '../App.css'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            social: [],
            about: [],
            userId: this.props.match.params.id,
            profileId: [],
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
            username: [],
            name:[],
            // videoId: [],
            videoOne: [],
            videoTwo: [],
            videoThree: [],
            videoFour: [],
            videoFive: []
        }
    }

    componentDidMount () {
        this.fetchUser()
        this.fetchSocial()
        this.fetchAbout()
        this.fetchVideos()

    }
  
    fetchUser = () => {
        
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
            this.setState({name: logData.name})
            this.setState({username: logData.username})
        
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
            console.log(logData)
           this.setState({social: logData})
           console.log(this.state.social)
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
        .catch(err => err)
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
            // this.setState({videoId: logData.id})
            if (logData) {
            this.setState({videoOne: logData.videoOne})
            this.setState({videoTwo: logData.videoTwo})
            this.setState({videoThree: logData.videoThree})
            this.setState({videoFour: logData.videoFour})
            this.setState({videoFive: logData.videoFive})
            }

        
      
        })
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="main">
                <div className="mainDiv">
                    <Jumbotron fluid>
                        <Container fluid>
                        <h1 className="display-3">{this.state.name}</h1>
                        <p className="lead">{this.state.aboutLocation} | {this.state.username}</p>
                        </Container>
                    </Jumbotron>
                    <Row>
                        <Col>
                        <ListGroup>
                            <ListGroupItem>
                            <ListGroupItemHeading>Facebook</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.facebook}
                            </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                            <ListGroupItemHeading>Twitter</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.twitter}
                            </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                            <ListGroupItemHeading>Instagram</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.Instagram}
                            </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                            <ListGroupItemHeading>Soundcloud</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.soundcloud}
                            </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
                        </Col>
                        <Col>
                        <ListGroup>
                        <ListGroupItem>
                            <ListGroupItemHeading>Website</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.website}
                            </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                            <ListGroupItemHeading>Extra Link</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.extraLinkOne}
                            </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                            <ListGroupItemHeading>Extra Link</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.extraLinkTwo}
                            </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                            <ListGroupItemHeading>Extra Link</ListGroupItemHeading>
                            <ListGroupItemText>
                                {this.state.extraLinkThree}
                            </ListGroupItemText>
                            </ListGroupItem>
                            </ListGroup>
                            </Col>
                        </Row>
                        <br/><br/>
                        <hr />
              
                       
                        <Row>
                        <Col><h2>About Me</h2> {this.state.aboutAbout}</Col>
                        <Col><h2>Instruments</h2> {this.state.aboutInstruments}</Col>
                        </Row>
                    <br/><br/>
                    <hr />
                 
                    <h2 className="videoTitle"> Videos </h2>
                    <br/>
                    <Row>
                    <Col xs="6"> 
                   
                    <ReactPlayer url={this.state.videoOne}  
                    width='100%'
                  />
                   
                    </Col>
                    <Col xs="6">
                    
                    <ReactPlayer url={this.state.videoTwo}
                    width='100%'
                   />
                    </Col>
                   
                    
                    </Row>
                    <br/> <br/> <br/>
                    <Row>
                    <Col xs="6">
                    
                    <ReactPlayer url={this.state.videoThree} width='100%'
                     />
                    </Col>
                    <Col xs="6">
                    <ReactPlayer url={this.state.videoFour} width='100%'
                    />
                    </Col>
                
                    </Row>
                    <br/> <br/> <br/>
                    <Row>
                    <Col xs="6">
                    <ReactPlayer url={this.state.videoFive} width='100%'
                    />
                    </Col>
                
                    </Row>

                </div>
            </div>
        )
    }
}