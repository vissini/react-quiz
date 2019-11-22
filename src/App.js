import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Question } from './Components/Question';

export default class Header extends Component {

  state = {
    questions: [
      {
        text: "Qual a capital do Brasil?",
        anwser: [
          {
            id:1,
            text: "Rio de Janeiro",
            anwser: false,
          },
          {
            id:2,
            text: "Brasília",
            anwser: true,
          },
          {
            id:3,
            text: "Florianópolis",
            anwser: false,
          }
        ]
      },
      {
        text: "Qual a capital do Peru?",
        anwser: [
          {
            id:1,
            text: "Saco",
            anwser: false,
          },
          {
            id:2,
            text: "Machupich",
            anwser: false,
          },
          {
            id:3,
            text: "Lima",
            anwser: true,
          }
        ]
      },
      {
        text: "Qual a capital da Argentina?",
        anwser: [
          {
            id:1,
            text: "Rio de Montevidéu",
            anwser: false,
          },
          {
            id:2,
            text: "Boenos Aires",
            anwser: true,
          },
          {
            id:3,
            text: "Boi nos Ares",
            anwser: false,
          }
        ]
      },
    ]
  };

  render(){
    return (
        <Container>
          <Question questions={this.state.questions}/>          
        </Container>
    )
  };
}
