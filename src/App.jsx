import React, { Component } from "react";
import Card from "./common/Card";
import CardHeader from "./common/CardHeader";
import CardBody from "./common/CardBody";
import CardFooter from "./common/CardFooter";
import Input from "./common/Input";
import Button from "./common/Button";
import Select from "./common/Select"
import "./App.scss";

import { connect}  from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false,
      bpm: 100,
      beat: 4,
      count: 0,
      context: new (window.AudioContext || window.webkitAudioContext)(),
      oscillatorOptions: {
        type: "sawtooth",
        frequency: {
          value: [220, 440]
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }


  createOscillator = key => {
    const { type, frequency } = this.state.oscillatorOptions;
    const oscillator = this.state.context.createOscillator();
    let now = this.state.context.currentTime;
    oscillator.type = type;
    oscillator.frequency.value = frequency.value[key];
    oscillator.connect(this.state.context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.1);
  };

  handleChange = e => {
    const bpm = +e.target.value;
    if (this.state.run) {
      clearInterval(this.timer);
      this.timer = setInterval(this.handleClick, (60 / bpm) * 1000);
      this.setState({ count: 0, bpm });
    } else {
      this.setState({ bpm });
    }
  };

  handleRun = () => {
    if (this.state.run) {
      clearInterval(this.timer);
      this.setState({ run: false });
    } else {
      this.timer = setInterval(this.handleClick, (60 / this.state.bpm) * 1000);
      this.setState({ count: 0, run: true }, this.handleClick);
    }
  };

  handleClick = () => {
    const { count, beat } = this.state;
    count % beat === 0 ? this.createOscillator(0) : this.createOscillator(1);
    this.setState(state => ({
      count: (state.count + 1) % state.beat
    }));
  };

  render() {
    const { run, bpm, count, beat } = this.state;

    return (
      <main>
        <Card>
          <CardHeader bpm={bpm} count={count} />
          <CardBody>
            <Input bpm={bpm} handleChange={this.handleChange} />
            <Select beat={beat}/>
          </CardBody>
          <CardFooter>
            <Button run={run} handleRun={this.handleRun} />
          </CardFooter>
        </Card>
      </main>
    );
  }
}

export default connect(state => ({...state}), dispatch => ({
  changeField: (key, value) => dispatch({ type: "CHANGE_FIELD", payload: {
    key,
    value
  }})
}))(App);
