
// follow along here: https://scrimba.com/casts/c67ygAr

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldAnimate: false
    };
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.setState({
      shouldAnimate: !this.state.shouldAnimate
    })
  }

  render() {
    return (
      <div>
        <Motion
          defaultStyle={{ height: 100, width: 100 }}
          style={{ height: this.state.shouldAnimate ? spring(200) : spring(100), width: this.state.shouldAnimate ? spring(200) : spring(100) }}>
          {(style) => {
            console.log(style);
            return (
              <div style={{ width: style.width, height: style.height, background: 'blue' }}></div>
            )
          }}
        </Motion>
        <button onClick={this.animate} style={{ width: '200px', height: '50px' }}>Animate</button>
      </div>
    )
  }
}