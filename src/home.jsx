import React, { Component } from 'react'

class Home extends Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Hello Dojo!</h1>
          <h6>Things i need to do:</h6>
          <ul>
            <li>Learn React</li>
            <li>Climb Mt Everest</li>
            <li>Run a Marathon</li>
            <li>Feed the dogs</li>
          </ul>
        </div>
      );
    }
  }

export default Home