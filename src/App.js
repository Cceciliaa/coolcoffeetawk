import React, { Component } from 'react';
import './App.css';

import Stopwatch from './Components/Stopwatch.js';
import DataEntry from './Components/DataEntry.js';
import ViewData from './Components/ViewData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false, runningTime: 0, sendTime: false, timeVal: 0,
      records: [], orderNum: '',
      
      currentRunningTime: 0,
      currentNumDrinks: 0
    
    }
    this.handleData= this.handleData.bind(this);
  }

  onStopWatchStart = () => {
    const startTime = Date.now() - this.state.runningTime;
    this.timer = setInterval(() => {
      this.setState({ runningTime: Date.now() - startTime });
    })
  }

  onStopWatchStopped = (time) => {
    clearInterval(this.timer);
    this.setState({sendTime: true, currentRunningTime: this.state.runningTime});

    // alert("Stopped! Total ordering time: " + this.state.runningTime + "ms");
  }

  onHandleReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
  };

  onChangeStatus = () => {
    this.setState({status: !this.state.status})
    return(this.state.status);
  }

  addTime = () => {
    if(this.props.sendTime) {
        this.setState({timeVal: this.state.runningTime});
    }
}

  handleData(data) {
    this.setState({
      orderNum: data,  

      records: this.state.records.concat({
        time: this.state.currentRunningTime,
        num: data
      }),
      runningTime: 0,
      status: false
    });
  }

  handleClick = (e) => {
    this.setState(state => {
      if (this.state.status) {
        this.onStopWatchStopped(this.state.time);
      } else {
        this.onStopWatchStart();
      }
      this.onChangeStatus();})
    };


  render() {
    return (
      <div className="CoffeeApp">
        <div>
          <h1 class="head">Begin Order!☕😍</h1>
          <Stopwatch onStopWatchStopped={this.onStopWatchStopped} time={this.state.runningTime}  
          onHandleReset={this.onHandleReset} onStopWatchStart={this.onStopWatchStart} 
          onChangeStatus={this.onChangeStatus} status={this.state.status} />
        </div>
        <div>
          <DataEntry handlerFromParant={this.handleData} />
        </div>
        <div>
          <ViewData  records={this.state.records} />
        </div>
      </div>
    );
  }
}

export default App;
