import React,{useState} from 'react';
import { Container, Button } from "reactstrap"

function Board(props) {
    const [tileButton, setTileButton] = useState([])
    const [tileDataArray, setTileDataArray] = useState([]);
    
    


    let arrayTileData = []
    for (let i = 0; i < 16; i++) {
        let tileData = { "id": (i), "currentValue": (i), "possibleMoves": [(i + 1), (i - 1), (i + 4), (i - 4)], "winValuess":(i) }
        // useState.setTileDataArray(tileData)
        arrayTileData.push(tileData)
        console.log(tileDataArray)
        console.log(arrayTileData)
    }



    let buttonArray = []
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num = props.tile_Data_Raw[i]
        let ogButton = <Button outline color="primary" 
        onClick={() => props.tile_click(i)} style={{ height: 150, width: 250 }} key={i}>{num.currentValue}
        </Button>
        buttonArray.push(ogButton)
    }

    const additem = ()=>
        setTileDataArray([...tileDataArray,{
            id:tileDataArray.length,
            value:Math.floor(Math.random()*10)+1
        }])
    return (
        <>
        <Container>
            {buttonArray}
        </Container>
        <Button onClick={additem}></Button>
        <ul>
            {tileDataArray.map(tileDataSingle =><li key={tileDataSingle.id}>{tileDataSingle.currentValue}</li>)}
        </ul>
        <Container>
            
        </Container>
        </>
    )
}

export default Board;


