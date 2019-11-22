import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { Anwser } from './Anwser';

function Question (props){
  
  return (
    <>
    { props.questions.map((el, idx) => (
      <Row key={idx} className="mb-3">
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card>
            <Card.Img variant="top" src="img/img1.jpg" />
            <Card.ImgOverlay style={{ backgroundColor: "rgba(245, 245, 245, 0.7)" }}>
              <Card.Title>{ el.text }</Card.Title>
            </Card.ImgOverlay>
            <Anwser anwser={el.anwser}/>
          </Card>
        </Col>
      </Row>
    ))}
    </>
  )
}

export {Question};