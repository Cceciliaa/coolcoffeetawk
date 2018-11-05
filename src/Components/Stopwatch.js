import React, { Component } from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
      super(props);
  }

    handleClick = (e) => {
      e.preventDefault();
      this.setState(state => {
        if (this.props.status) {
          this.props.onStopWatchStopped(this.props.time);
        } else {
          this.props.onStopWatchStart();
        }});
      this.props.onChangeStatus();
    };

    handleReset = () => {
        this.props.onHandleReset();
      };

    render() {
      return (
        <center>
        <div class="card">
          <p class="card-header">{this.props.time}ms</p>
          <div class="card-body">
          <button class="myButton" id='ss' onClick={this.handleClick}>{this.props.status ? 'Stop' : 'Start'}</button>
          <button class="myButton" id='reset' onClick={this.handleReset}>Reset</button>
          </div>
        </div>
        </center>
      );
    }
  }

export default Stopwatch;
  