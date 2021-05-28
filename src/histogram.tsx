import React from 'react';

interface BarProps {
  time: number;
  height: number;
  max: number;
}
export const histogram = (bars: Array<BarProps>) => (
  <div className="histogram">
    {bars.map(val => (<Bar {...val} />))}
  </div>
);
class Bar extends React.Component<BarProps> {
  static timezoneOffset = new Date().getTimezoneOffset();
  render() {
    const height = this.props.height * 100 / this.props.max + "%";
    const time = new Date(0);
    time.setUTCMilliseconds(this.props.time + Bar.timezoneOffset * 60000);
    return <div className="bar" style={{ height: height }}>
      <div className="amount"> {this.props.height}</div>
      <div className="time"> {time.getHours()} </div>
    </div>;
  }
}
