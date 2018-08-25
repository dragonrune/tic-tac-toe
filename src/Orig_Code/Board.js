import React, { Component } from 'react'
import './Board.css'

class App extends Component {
  render() {
    return (
      <section>
        <div className="row row1">
          <div>
            {this.props.one}
          </div>
          <div>
            {this.props.two}
          </div>
          <div>
            {this.props.three}
          </div>
        </div>
        <div className="row row2">
          <div>
            {this.props.four}
          </div>
          <div>
            {this.props.five}
          </div>
          <div>
            {this.props.six}
          </div>
        </div>
        <div className="row row3">
          <div>
            {this.props.seven}
          </div>
          <div>
            {this.props.eight}
          </div>
          <div>
            {this.props.nine}
          </div>
        </div>
      </section>
    )
  }
}

export default App
