import { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: props.step,
      minutes: props.minutes,
      seconds: props.seconds * 1000,
      milsec: props.milsec,
      autorun: props.autorun,
    };

    this.manageTimer = this.manageTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  componentDidMount() {
    this.setState({ active: this.state.autorun ? false : true });
    if (this.state.autorun) {
      this.timerID = setInterval(() => this.tick(), this.state.interval);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.minutes === 0 && nextState.seconds === 0) {
      this.props.onTimeEnd();
      clearInterval(this.timerID);
      return false;
    }
    return true;
  }
  manageTimer() {
    if (this.state.active) {
      this.props.onTimeStart();
      this.timerID = setInterval(() => this.tick(), this.state.interval);
    } else {
      this.props.onTimePause();

      clearInterval(this.timerID);
    }

    this.setState({ active: !this.state.active });
  }
  resetTimer() {
    this.setState({
      minutes: this.props.minutes,
      seconds: this.props.seconds * 1000,
      milsec: this.props.milsec,
      active: true,
    });
  }
  tick() {
    if (this.state.interval < 1000) {
      if (this.state.milsec > 0) {
        this.setState({ milsec: this.state.milsec - this.state.interval });
      } else if (this.state.seconds === 0) {
        this.setState({
          seconds: 60000,
          minutes: this.state.minutes - 1,
        });
      } else if (this.state.milsec === 0) {
        this.setState({
          seconds: this.state.seconds - 1000,
          milsec: 1000 - this.state.interval,
        });
      }
    } else {
      if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - this.state.interval });
      } else if (this.state.seconds === 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59000,
        });
      }
    }
  }
  render() {
    return (
      <div className="Timer">
        {" "}
        <div className="timer-field">
          {this.state.minutes < 10
            ? `0${this.state.minutes}`
            : this.state.minutes}
          :
          {this.state.seconds < 10000
            ? `0${this.state.seconds / 1000}`
            : this.state.seconds / 1000}
          {this.props.milsec ? `:${this.state.milsec}` : null}
        </div>
        <div className="button-field">
          <button onClick={this.manageTimer}>Stop/Start</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Timer;
