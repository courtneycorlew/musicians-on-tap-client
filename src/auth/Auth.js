import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './auth.css'
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
        <div>

            <h1 className="homePageText"> Musicians On Tap </h1>


        <Container className="auth-container">
           
            <Row>
                <Col md="6">
                    <Signup setToken={props.setToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Auth;