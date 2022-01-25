import React, { Component } from "react";
import { makeObservable, observable, action } from "mobx";
import { observer } from "mobx-react";

class Counter extends Component {
    number = 0;

    constructor() {
        super();
        makeObservable(this, {
            number: observable,
            increase: action,
            decrease: action,
        });
    }

    increase = () => {
        this.number++;
    };

    decrease = () => {
        this.number--;
    };

    render() {
        return (

            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        );
    }
}

export default observer(Counter);