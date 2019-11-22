import React from "react";
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

function Anwser (props){
  console.log(props);
  return (
    <ListGroup variant="flush">
    { props.anwser.map((el, idx) => (
      
        <ListGroup.Item key={idx} id={el.id}>{el.text}</ListGroup.Item>
        
    ))}
    </ListGroup>
  )
}

export {Anwser};