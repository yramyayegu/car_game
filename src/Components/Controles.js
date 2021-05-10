import React from "react"
import { Button, Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle , ArrowUpCircle , ArrowDownCircle , ArrowLeftCircle } from 'react-bootstrap-icons';
const Controles = (props) =>{ 
  let move = props.move
    return (
        <div className="App">
      <header className="App-controles">
        <h1> Welcome </h1>
        <h1> To </h1>
        <h1> Puzzle </h1>
        <h2>Controles</h2>
      </header>
        <Container>
          <Row>
              <Col xs><Button variant="primary" onClick={() => { move("top") }}><ArrowUpCircle color="white" size={50} /></Button></Col>
              <Col xs><Button variant="primary" onClick={() => { move("bottom") }}><ArrowDownCircle color="white" size={50} /></Button></Col>
              <Col xs><Button variant="primary" onClick={() => { move("left") }}><ArrowLeftCircle color="white" size={50} /></Button></Col>
              <Col xs><Button variant="primary" onClick={() => { move("right") }}><ArrowRightCircle color="white" size={50} /></Button></Col>
          </Row>
        </Container>
      
    </div>
    )
}

export default Controles