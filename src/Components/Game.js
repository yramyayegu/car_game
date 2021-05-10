import React, { useEffect, useState } from "react"
import Pallet from "./Pallet"
import { Container, Row, Col } from "react-bootstrap";

const Game = (props) => {
    const [row, setrow] = useState([1, 2, 3, 4, 5])
    const [col, setcol] = useState([1, 2, 3, 4, 5, 6, 7])
    const [nextmove, setnextmove] = useState(null)
    
    let i = 1;
    useEffect(() => {
        let arr = Array.from({ length: 5 }, (_, i) => i + 1)
        setrow(arr)
        let arr1 = Array.from({ length: 7 }, (_, i) => i + 1)
        setcol(arr1)
    }, [])



    const getClassfrompallet = (data) => {
       setnextmove(data.cellno)
    }

    const nextMovebtn = (classess) => {

        console.log(classess)
        let x = classess.includes(props.clickedDirection)
        console.log(classess)
        if(!x){
            switch(props.clickedDirection)
            {
                case "top" :                     
                    let top = nextmove - 1;
                    if (top > 0) { setnextmove(top); }
                break;
                case "bottom" :                     
                    let bottom = nextmove + 1;
                    if (bottom > 0) { setnextmove(bottom); }
                break;
                case "right" :                     
                    let right = nextmove + 5;
                    if (right < 36) { setnextmove(right); }
                break;
                case "left" :                     
                    let left = nextmove - 5;
                    if (left < 36) { setnextmove(left); }
                break;
            }

            if(classess === "finish"){
                console.log("level up")
                    props.finish(1)
            }
        }
        else{
            console.log("Nothing Clicked")
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Game</h1>
                <Container>
                    <Row>
                        {
                        col.map((colitem) => (
                        <Col>
                            {
                            row.map((rowitem) => (
                            <Pallet
                                ii={i++}
                                clickedDirection = {props.clickedDirection}
                                nextMovebtn ={nextMovebtn}
                                getClassfrompallet={getClassfrompallet}
                                nextmove={nextmove}       
                            />
                            ))
                            }
                        </Col>
                        ))
                        }
                    </Row>
                </Container>
                <p>&nbsp;</p>
                <div>
                                     
                </div>
            </header>
        </div>
    )
}

export default Game