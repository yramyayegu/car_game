import React,{ useState} from "react"
import { Container,Row,Col } from "react-bootstrap";
import Controles from "./Controles";
import Game from "./Game";

const Layout = () =>{ 
  const [gstrip,setgstrip] = useState("hide");
  const [clickedDirection, setclickedDirection] = useState(null)
  const move = (clickedDirection) => {
    setclickedDirection(clickedDirection)
  }

  const finish = (data) => {
    console.log(data)
    console.log("finish fun treggred")
    setgstrip("show")
  }

    return (
        <div className="App">
      <header className="App-header">
      <Container>
        <Row>
            <Col className="game"> <Game move={move} finish={finish} clickedDirection={clickedDirection} /> </Col>
            <Col className="controles" lg="4"><Controles  move={move} /></Col>
            <Col className="levels" xs lg="1">Levels</Col>
        </Row>
      </Container>
          <br />
      <div className={gstrip}> 
        <Container>
          <Row>
            <Col className="nextlevel">Next Levels</Col>
          </Row>
        </Container>
      </div>
      </header>
    </div>
    )
}

export default Layout