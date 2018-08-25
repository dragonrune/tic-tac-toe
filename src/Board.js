import React, { Component } from 'react'
import BlankPiece from './BlankPiece'
import OPiece from './OPiece'
import XPiece from './XPiece'
import './Board.css'

class App extends Component {
  render() {
    return (
      <section>
        <div className="row row1">
          <div>
            <OPiece />  
          </div>
          <div>
            <BlankPiece />  
          </div>
          <div>
            <XPiece />  
          </div>
        </div>
        <div className="row row2">
          <div>
            <BlankPiece />  
          </div>
          <div>
            <OPiece />  
          </div>
          <div>
            <BlankPiece />  
          </div>
        </div>
        <div className="row row3">
          <div>
            <XPiece />  
          </div>
          <div>
            <BlankPiece />  
          </div>
          <div>
            <XPiece />  
          </div>
        </div>
      </section>
    )
  }
}

export default App
