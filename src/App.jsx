import React, { Component } from "react";
import Card from "./common/Card";
import CardHeader from "./common/CardHeader";
import CardBody from "./common/CardBody";
import CardFooter from "./common/CardFooter";
import Input from "./common/Input";
import Button from "./common/Button";
import Select from "./common/Select";

import { connect } from "react-redux";
import metronome from "./metronome";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }

  handleChange = (name, e) => {
    this.props.changeField(name, +e.target.value);
  };

  handleRun = () => {
    this.props.changeField("run", !this.props.run);
  };

  componentDidUpdate() {
    const { run, bmp, beat } = this.props;
    metronome(run, beat, bmp, count => console.log(count));
  }

  render() {
    const { run, bmp, count, beat } = this.props;
    return (
      <main>
        <Card>
          <CardHeader bpm={bmp} count={count} />
          <CardBody>
            <Input bpm={bmp} handleChange={e => this.handleChange("bmp", e)} />
            <Select
              beat={beat}
              handleChange={e => this.handleChange("beat", e)}
            />
          </CardBody>
          <CardFooter>
            <Button run={run} handleRun={this.handleRun} />
          </CardFooter>
        </Card>
      </main>
    );
  }
}

export default connect(
  state => ({ ...state }),
  dispatch => ({
    changeField: (key, value) =>
      dispatch({
        type: "CHANGE_FIELD",
        payload: {
          key,
          value
        }
      })
  })
)(App);
