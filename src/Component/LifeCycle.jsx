import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
        };
    }

    //Lifecycle method: called once the component is mounted
    componentDidMount(){
        console.log('Timer started');
        this.timerID = setInterval(() => this.tick(), 1000);

    }

    //Lifecyle method:called just before the component is unmounted
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('Timer stoped');
    }

    //Custom method to increment the timer every second
    tick() {
        this.setState((state) => ({
            seconds:state.seconds + 1,
        }));
    };
    //Method to reset the timer
    resetTimer = () => {
        this.setState({second:0});
    };
  render() {
    return (
      <div>
      <h1>Timer: {this.state.seconds}</h1>
      <button onClick={this.resetTimer}>Reset Timer</button>  
      </div>
    );
  }
}

export default LifeCycle
