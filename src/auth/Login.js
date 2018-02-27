import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css'
// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        fetch("https://musicians-on-tap-server.herokuapp.com/api/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
            if(data.sessionToken){
            window.location.href = 'musiciansontap/dashboard'
            } else {
                alert('This user does not exist.')
            }
            window.localStorage.setItem("currentUser", data.user.id)
        }) 
        event.preventDefault()
    }

    render() {
        return (

            <div>
                <h1 className="signupText"> Login</h1>
                <h6 className="signupText">Please log into your account below.</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username" className="signupText">Username</Label>
                        <Input id="li_username" type="email" name="username" placeholder="enter username" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className="signupText">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required/>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }


}

export default Login;