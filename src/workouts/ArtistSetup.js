import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import {withRouter} from 'react-router-dom';
// import App from '../App'


class ArtistSetup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            about: '',
            location: '',
            instruments: '',
            submit : false
            
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log(this.state)
       
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    nextPath(path) {
        this.props.history.push(path);
      }

    handleSubmit(event) {
        event.preventDefault()
        fetch("https://musicians-on-tap-server.herokuapp.com/api/artist/", {
            method: 'POST',
            body: JSON.stringify({ artist: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                // this is where you would clear out the fields 
                this.setState({submit: true})
                console.log(this.state)
                this.socialsettings()
                
            })
    }
    socialsettings = () => this.nextPath('musiciansontap/socialsettings')


  


    render() {
    
        return (
            <div className="main">

       <div className="mainDiv">
                
                <h3>Set up your user profile</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                <FormGroup>
                        <Label for="about">About</Label>
                        <Input id="about" type="text" name="about" placeholder="enter about you" onChange={this.handleChange} />
                    </FormGroup>
                    {/* location */}
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input id="location" type="text" name="location" placeholder="enter location" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="instruments">Instruments</Label>
                        <Input id="instruments" type="text" name="instruments" placeholder="enter instruments" onChange={this.handleChange} />
                    </FormGroup>
                 
                    <Button  type="submit" color="primary"> Submit </Button>
                </Form>
                </div>
                </div>
              
           
        )
    }
}

// $('#submitForm').submit()

export default withRouter(ArtistSetup);