import React from 'react';
import { Card, CardText, CardTitle,
    CardSubtitle, CardBody } from 'reactstrap';
import styled from 'styled-components';
import {
    Link
  } from 'react-router-dom'
const Title = styled.p `
font-weight: bold;
`
const Body = styled.div  `
text-align: center;
border: 3px solid black;

`

    

    const ArtistCard = (props) => {
        // console.log('Musician Card: ', props)
        // console.log('from musician card',props)

        return (
          
            <Card>
            <Body>
              <CardBody>
                
                <CardTitle><Title>{props.userName}</Title></CardTitle>
                <CardSubtitle> {props.email} <br />
                {props.instruments} </CardSubtitle>
                <CardText> {props.about} <br /><br /> {props.location} <br/><br/>
                <span className="profileLink">
                <Link to={`/profile/${props.owner}`} > View Profile </Link>
                </span>
                </CardText>
              </CardBody>
              </Body>
            </Card>
             
           
        );
      };


export default ArtistCard;