import React, { Component } from 'react'
import Box from './Box'
import './ColorBoxes.css';

export default class ColorBoxes extends Component {
    static defaultProps={
        noOfBox:18,
        colors:['red','blue','green','yellow','grey','pink','brown','violet']
    }
    
  render() {
    const boxes=Array.from({length:this.props.noOfBox});
    return (
      <div className='ColorBoxes'>
        {boxes.map(h=> <Box colors={this.props.colors}/>)}
      </div>
    )
  }
}
