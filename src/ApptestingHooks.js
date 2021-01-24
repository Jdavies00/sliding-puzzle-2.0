import React from 'react'
import React, { useState, useCallback } from 'react';

function ApptestingHooks() {
    const [tileData, setTileData] = useState([{}]);
    const [tileButton, setTileButton] = useState([])

    //this for my on click function
    const clickHandle = useCallback(
        () => {
            callback
        }, []);
        tileArray=[]
    for (let i = 0; i < 16; i++) {
        let tileForAray = { "id": [i], "currentValue": [i], "possibleMoves": [[i] + 1, [i-1], [i+4], [i-4]] }
        tileArray.push(tileForAray)
    }
    let buttonArray = []
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num = props.tile_Data_Raw[i]
        let ogButton = <Button outline color="primary" onClick={() => props.tile_click(i)} style={{ height: 150, width: 250 }} key={i}>{num.currentValue}</Button>
        buttonArray.push(ogButton)
    }
    return (
        <div>

        </div>
    )
}

export default ApptestingHooks
