import React, { Component } from 'react';
import Board from "./Components/Board"
import { Container, Row, Col } from "reactstrap"



class App extends Component {
  constructor() {
    super();
    this.state = {
      dataForTheTile: [
        { 'id': 0, 'currentValue': 0, 'possibleMoves': [1, 4], 'currentRowX': 0, 'currentCloumY': 0, 'winValue': 0 },
        { 'id': 1, 'currentValue': 1, 'possibleMoves': [0, 2, 5], 'currentRowX': 1, 'currentCloumY': 0, 'winValue': [1, 0] },
        { 'id': 2, 'currentValue': 2, 'possibleMoves': [1, 6, 3], 'currentRowX': 2, 'currentCloumY': 0, 'winValue': [2, 0] },
        { 'id': 3, 'currentValue': 3, 'possibleMoves': [2, 7], 'currentRowX': 3, 'currentCloumY': 0, 'winValue': [3, 0] },

        { 'id': 4, 'currentValue': 4, 'possibleMoves': [0, 5, 8], 'currentRowX': 0, 'currentCloumY': 1, 'winValue': [0, 1] },
        { 'id': 5, 'currentValue': 5, 'possibleMoves': [1, 4, 6, 9], 'currentRowX': 1, 'currentCloumY': 1, 'winValue': [1, 1] },
        { 'id': 6, 'currentValue': 6, 'possibleMoves': [2, 5, 10, 7], 'currentRowX': 2, 'currentCloumY': 1, 'winValue': [2, 1] },
        { 'id': 7, 'currentValue': 7, 'possibleMoves': [3, 6, 11], 'currentRowX': 3, 'currentCloumY': 1, 'winValue': [3, 1] },

        { 'id': 8, 'currentValue': 8, 'possibleMoves': [4, 9, 12], 'currentRowX': 0, 'currentCloumY': 2, 'winValue': [0, 2] },
        { 'id': 9, 'currentValue': 9, 'possibleMoves': [5, 8, 10, 13], 'currentRowX': 1, 'currentCloumY': 2, 'winValue': [1, 2] },
        { 'id': 10, 'currentValue': 10, 'possibleMoves': [6, 9, 14, 11], 'currentRowX': 2, 'currentCloumY': 2, 'winValue': [2, 2] },
        { 'id': 11, 'currentValue': 11, 'possibleMoves': [7, 10, 15], 'currentRowX': 3, 'currentCloumY': 2, 'winValue': [3, 2] },

        { 'id': 12, 'currentValue': 12, 'possibleMoves': [8, 13], 'currentRowX': 0, 'currentCloumY': 3, 'winValue': [0, 3] },
        { 'id': 13, 'currentValue': 13, 'possibleMoves': [9, 12, 14], 'currentRowX': 1, 'currentCloumY': 3, 'winValue': [1, 3] },
        { 'id': 14, 'currentValue': 14, 'possibleMoves': [10, 13, 15], 'currentRowX': 2, 'currentCloumY': 3, 'winValue': [2, 3] },
        { 'id': 15, 'currentValue': 15, 'possibleMoves': [11, 14], 'currentRowX': 3, 'currentCloumY': 3, 'winValue': [3, 3] }],
      Clicks: 0
    }
    this.clickfunction = this.clickfunction.bind(this)
  }
 

  clickfunction(tileID) {
    for (let i = 0; i < 16; i++) {
      var evilTileValue = this.state.dataForTheTile[i].currentValue
      if (evilTileValue === 0)
        for (let j = 0; j < this.state.dataForTheTile[tileID].possibleMoves.length; j++) {
          var possibleMoveID = this.state.dataForTheTile[tileID].possibleMoves[j];
          var currentMoveToCheck = this.state.dataForTheTile[i].id
          if (possibleMoveID === currentMoveToCheck) {
            console.log('can switch')
            // create a new array with updated values
            let copy = this.state.dataForTheTile
            // console.log(this.state.dataForTheTile)
            let temp = 0
            temp = copy[tileID].currentValue
            copy[tileID].currentValue = copy[i].currentValue
            copy[i].currentValue = temp
            console.log(copy)
            this.setState({ dataForTheTile: copy })
          } else {
            console.log('can not switch')
          }

        }
    }
  }

  componentDidUpdate() {
    console.log("state was set", this.state.dataForTheTile);
  }
  render() {
    return (
      <>
        <Container style={{ border: '1px solid grey' }}>
          <Col>
            <h1> Sliding Puzzle </h1>
          </Col>
          <Board
            tile_Data_Raw={this.state.dataForTheTile}
            tile_click={this.clickfunction} />
        </Container>
      </>
    );
  }
}



export default App;