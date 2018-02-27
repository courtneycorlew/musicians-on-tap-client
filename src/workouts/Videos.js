import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import {withRouter} from 'react-router-dom';
class Videos extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            videoOne: '',
            videoTwo: '',
            videoThree: '',
            videoFour: '',
            videoFive: ''
            
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

        fetch("http://localhost:3001/api/videos", {
            method: 'POST',
            body: JSON.stringify({ videos: this.state }),
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
    changePage = () => this.nextPath('/dashboard')
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                <h3>Add Videos</h3>
                                <hr />
                                <Form onSubmit={this.handleSubmit} >
                                    <FormGroup>
                                        <Input id="videoOne" type="text" name="videoOne" placeholder="video url" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input id="videoTwo" type="text" name="videoTwo" placeholder="video url" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input id="videoThree" type="text" name="videoThree" placeholder="video url" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input id="videoFour" type="text" name="videoFour" placeholder="video url" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input id="videoFive" type="text" name="videoFive" placeholder="video url" onChange={this.handleChange} />
                                    </FormGroup>
                                   <Button  type="submit" color="primary"> Submit </Button>
                                </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Videos);