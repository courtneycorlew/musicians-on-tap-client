import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';
class SocialLinks extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            facebook: '',
            twitter: '',
            instagram: '',
            youtube: '',
            soundcloud: '',
            website: '',
            extraLinkOne: '',
            extraLinkTwo: '',
            extraLinkThree: '',
            
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    nextPath(path) {
        this.props.history.push(path);
      }

    handleSubmit(event) {
        event.preventDefault();

        fetch("https://musicians-on-tap-server.herokuapp.com/api/socialLinks", {
            method: 'POST',
            body: JSON.stringify({ social: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                console.log(logData)
                // this is where you would clear out the fields 
                this.changePage()
            })
    }
    changePage = () => this.nextPath('/videos')
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                <h3>Set up your social links</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                <FormGroup>    
                    <Input id="facebook" type="text" name="facebook" placeholder="facebook link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="twitter" type="text" name="twitter" placeholder="twitter link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="instagram" type="text" name="instagram" placeholder="instagram link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="youtube" type="text" name="youtube" placeholder="youtube link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="soundcloud" type="text" name="soundcloud" placeholder="soundcloud link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="website" type="text" name="website" placeholder="website link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="extraLinkOne" type="text" name="extraLinkOne" placeholder="extra link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="extraLinkTwo" type="text" name="extraLinkTwo" placeholder="extra link" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>    
                    <Input id="extraLinkThree" type="text" name="extraLinkThree" placeholder="extra link" onChange={this.handleChange} />
                </FormGroup>
                 
                 
                    
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(SocialLinks);