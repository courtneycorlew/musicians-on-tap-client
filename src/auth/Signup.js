import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css'



class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            username: '',
            password: ''
            // isEmpty: true,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateSignUp = this.validateSignUp.bind(this);



        
    }





    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
       
        fetch("https://musicians-on-tap-server.herokuapp.com/api/signup", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })

        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
            console.log(data)
            window.location.href = 'musiciansontap/artistsetup'
            window.localStorage.setItem("currentUser", data.user.id)
            
            
        }).catch(err => err)
        event.preventDefault()
    }


    // This is the start of basic validation, but you can do a lot with this.
    validateSignUp(event) {
        this.setState({
            errorMessage:'Fields must not be empty'
        })
        event.preventDefault();
    }

    render() {
        // here for validation
        const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
        return (
            <div>
         

                <h1 className="signupText">Sign Up</h1>
                <h6 className="signupText">Please sign up with your full name, email, and a unique password. </h6>
                


                <Form onSubmit={submitHandler} >
                <FormGroup>
                        <Label for="name" className="signupText">Full Name</Label>
                        <Input id="li_name" type="text" name="name" placeholder="enter full name" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="username" className="signupText">username</Label>
                        <Input id="username" type="email" name="username" placeholder="enter username ( email@address.com )" onChange={this.handleChange} required />
                        {this.state.errorMessage && <span className="error">user name is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password" className="signupText">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required minLength="5"/>

                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }


}

export default Signup;