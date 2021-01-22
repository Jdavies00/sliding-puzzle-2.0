import React from 'react';
import { Container, Button } from "reactstrap"

function Board(props) {

    let buttonArray = []
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num = props.tile_Data_Raw[i]
        let ogButton = <Button outline color="primary" onClick={() => props.tile_click(i)} style={{ height: 150, width: 250 }} key={i}>{num.currentValue}</Button>
        buttonArray.push(ogButton)
    }
    return (
        <Container>
            {buttonArray}
        </Container>
    )
}

export default Board;