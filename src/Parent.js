import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      parentColor: getRandomColor(),
      childColor: '#FFF'

    }
  }
  
    childColorHandler = (newColor) => {
    this.setState((prevState) => (
      {
        color: getRandomColor(),
        childColor: newColor
      })
    )
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.parentColor}}>
        <Child color={this.state.childColor} clickHandler = {this.childColorHandler}/>
        <Child color={this.state.childColor} clickHandler = {this.childColorHandler}/>
      </div>
    )
  }
}

export default Parent
