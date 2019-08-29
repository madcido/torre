import React from 'react';
import '../css/Counter.css';
import { normalizeTime } from '../util.js';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: Math.floor((this.props.expiration.getTime() - Date.now())/1000),
    };
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      remainingTime: Math.floor((this.props.expiration.getTime() - Date.now())/1000),
    });
  }

  render() {
    const remainingTime = this.state.remainingTime;
    const seconds = normalizeTime(remainingTime%60);
    const minutes = normalizeTime(Math.floor(remainingTime/60)%60);
    const hours = normalizeTime(Math.floor(remainingTime/3600)%24);
    const days = normalizeTime(Math.floor(remainingTime/(24*3600)));
    if (remainingTime > 0) {
      return (
        <div className='counter row center'>
          <p>{days}<span>DAYS</span></p>
          <p>{hours}<span>HOURS</span></p>
          <p>{minutes}<span>MIN</span></p>
          <p>{seconds}<span>SEC</span></p>
        </div>
      );
    } else {
      return (
        <p>EXPIRED</p>
      );
    }
  }
}

export default Counter;
