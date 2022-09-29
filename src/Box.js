import React, { Component } from 'react'
import './Box.css'
export default class Box extends Component {
  constructor(props){
    super(props);
    this.state={
        color:this.generateColor()
    }
  }
  generateColor=()=>{
    return this.props.colors[Math.floor(Math.random()*this.props.colors.length)];
  }
  colorChange=()=>{
    let color=this.generateColor();
    // this.setState(currentState=>{
    //     return {
    //       color:currentState.color!==color?color:this.generateColor()
    //     }
    // })
    while(color===this.state.color) color=this.generateColor();
    this.setState({color:color});
  }
  render() {
    return (
      // <div className='Box' >
      //   <button onClick={this.colorChange} style={{backgroundColor:this.state.color}}></button>
      // </div>

      <div
        className='Box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.colorChange}
      />
    )
  }
}

