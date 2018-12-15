import React, { Component } from 'react';

class ViewData extends React.Component {
    constructor(props) {
          super(props);
        }
    
    addTime = () => {
        if(this.props.sendTime) {
            const time = this.props.timeVal+"ms";
            return(time);
        }
    }

    render() {
        return(
            <center>
            <h1 class="datahead">Data:</h1>
            <div class='dataForm'>
            <center>
            <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" id="writer">
            <span>Order Time</span> 
            <span>Order number</span>
            </li>
                {this.props.records.map(function(record){
                    return <li class="list-group-item d-flex justify-content-between align-items-center" id="writer">
                    <span>{record.time}ms</span> 
                    <span>{record.num} </span></li>
                })}
            </ul>
            </center>
            </div>
            </center>
        )
    }
}

export default ViewData;

