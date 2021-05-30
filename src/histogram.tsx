import React from 'react';
import { processDriveTimes } from './processor';

interface BarProps {
  time: number;
  height: number;
  max: number;
}

interface HistogramState {
  bars: Array<BarProps>
}

export class Histogram extends React.Component<{},HistogramState> {
  state = {bars:[]}
  componentDidMount () {
    fetch('proxy/').then(
      resp => {
        resp.json().then(
          jsonArray => this.setState({bars:processDriveTimes(jsonArray)})
        )
      }
    
    ).catch(reason => console.log(reason))
  }
  render() {
    return (
      <div className="histogram">
        {this.state.bars.map((val, i) => (<Bar key={i} {...val} />))}
      </div>
    )
 }
};
class Bar extends React.Component<BarProps> {
  static timezoneOffset = new Date().getTimezoneOffset();
  render() {
    const height = (this.props.height * 100 / this.props.max) + "%";
    const time = new Date(0);
    time.setUTCMilliseconds(this.props.time + Bar.timezoneOffset * 60000);
    return <div className="bar" >
      <div className="container" > 
        <div className="amount" style={{ height: height }}> {this.props.height}</div>
        <div className="time"> 
          <div className="date">{time.toLocaleDateString()} </div> 
          {time.getHours()+":00"}   
      </div>
      </div>
      
    </div>;
  }
}
