import React, { Component } from 'react';

class DataEntry extends React.Component {
    constructor() {
        super();
        // this.state = { inputVal: '', valueList: [{inputVal: ''}] };
        this.state = { inputVal: '' }
        this.updateOrder = this.updateOrder.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    updateOrder = (event) => {
        this.setState({ inputVal: event.target.value })
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        this.props.handlerFromParant(this.state.inputVal);
        // alert('Successfully submitted!');
        this.setState({ inputVal: '' });
    }

    render() {
        return (
            <center>
                <div class="jumbotron">
                    <form onSubmit={this.submitHandler}>
                        <label>
                            <center><p id='ist'>Enter the number of drinks in each order:</p></center>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon3">Number</span>
                                </div>
                                <input type="text" class="form-control" id="drinks_number" aria-describedby="basic-addon3" value={this.state.inputVal} onChange={this.updateOrder} />
                            </div>
                        </label>
                        <input type="submit" class="btn-success" id="print" value="Submit" />
                    </form>
                </div>
            </center>
        )
    }
}

export default DataEntry;