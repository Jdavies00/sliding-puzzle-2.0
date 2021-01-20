import React from 'react';
// import "bootstrap"
function Board(props) {

    let bunchoButonsArray = []
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num = props.tile_Data_Raw[i]
        let ogButton = <button className=" col-3 btn-primary" onClick={() => props.tile_click(i)} style={{ height: 150 }} key={i}>{num.currentValue}</button>
        bunchoButonsArray.push(ogButton)
    }
    return (
        <div className='container'>
            <div className='row'>
                {bunchoButonsArray}
            </div>
        </div>
    )
}

export default Board;