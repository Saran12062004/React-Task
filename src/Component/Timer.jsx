import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: 0,
          isRunning: false,
        };
        this.intervalId = null;
      }
    
      componentDidMount() {
        console.log('Timer component mounted');
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (this.state.time !== prevState.time) {
          console.log(`Time updated: ${this.state.time} seconds`);
        }
    
        if (this.state.isRunning && !prevState.isRunning) {
          // Start the interval when isRunning becomes true
          this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ time: prevState.time + 1 }));
          }, 1000);
        } else if (!this.state.isRunning && prevState.isRunning) {
          // Clear the interval when isRunning becomes false
          clearInterval(this.intervalId);
        }
      }
    
      componentWillUnmount() {
        console.log('Timer component will unmount');
        // Clear the interval when the component unmounts to avoid memory leaks
        clearInterval(this.intervalId);
      }
    
      startTimer = () => {
        this.setState({ isRunning: true });
      };
    
      stopTimer = () => {
        this.setState({ isRunning: false });
      };
  render() { 
    const statusStyle = {
    color: this.state.isRunning ? 'lightGreen' : 'red',
      };
    return (
      <div>
     <span className='fs-1'>Timer:</span>    <span className='fs-1'> {this.state.time} seconds</span><br />
      <span className='fw-bold' >Status:</span>  <span style={statusStyle}> {this.state.isRunning ? 'Running... ' : 'Stopped.'}</span> <br /> <br />
        <button className='btn btn-outline-success' onClick={this.startTimer}>Start</button>
        <br /> <br />
        <button  className='btn btn-outline-danger' onClick={this.stopTimer}>Stop</button>
      </div>
    )
  }
}

export default Timer
