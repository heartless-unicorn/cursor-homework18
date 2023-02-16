import { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 10,
      active: true,
    };
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.time < 0) {
      clearInterval(this.timerID);
    }
  }
  //   componentWillUnmount() {
  //

  tick() {
    if (this.state.active) {
      this.setState({ time: this.state.time-- });
    }
  }
  render() {
    return (
      <div className="Timer">
        <div>{this.state.time}</div>
        <button onClick={() => this.setState({ active: !this.state.active })}>
          Stop
        </button>
      </div>
    );
  }
}

export default Timer;
