import React, { Component } from 'react'
import './App.css'
import Board from './Board.js'
import BlankPiece from './BlankPiece'
import XPiece from './OPiece'
import OPiece from './XPiece'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="App-title">Tic-Tac-Toe</h1>
        </header>
        <p>
          <Board />
        </p>
      </div>
    )
  }
}

export default App
