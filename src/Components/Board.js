import React,{useState} from 'react';
import { Container, Button } from "reactstrap"

function Board(props) {
    const [tileButton, setTileButton] = useState([])
    const [alltileData, setAllTileData] = useState([]);
    
    


    let tileDataArray = []
    for (let i = 0; i < 16; i++) {
        let tileData = { "id": (i), "currentValue": (i), "possibleMoves": [(i + 1), (i - 1), (i + 4), (i - 4)], "winValuess":(i) }
        // useState.setTileDataArray(tileData)
        tileDataArray.push(tileData)
        console.log(tileDataArray.length)
        // console.log(arrayTileData)
    }


    const updateTile = ()=>
        setAllTileData([...tileDataArray,{
            id:tileDataArray.id,
            value:tileDataArray.currentValue
        }])

    let buttonArray = []
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num = props.tile_Data_Raw[i]
        let ogButton = <Button outline color="primary" 
        onClick={() => props.tile_click(i)} 
        // onClick={updateTile}
        style={{ height: 150, width: 250 }} key={i}>{num.currentValue}
        </Button>
        buttonArray.push(ogButton)
    }

    return (
        <>
        <Container>
            {buttonArray}
        </Container>
        {/* <Button onClick={updateTile}></Button> */}
        {/* <ul> */}
            {/* {tileDataArray.map(tileDataSingle =><li key={tileDataSingle.id}>{tileDataSingle.currentValue}</li>)} */}
        {/* </ul> */}
       
        </>
    )
}

export default Board;


