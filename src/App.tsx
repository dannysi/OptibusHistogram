import React from 'react';
import './App.scss';
import { histogram } from './histogram';
import { processDriveTimes } from './processor';

const jsonStr = `[
  {
     "startTime": "2015-04-01T12:39:00.000Z",
     "endTime": "2015-04-01T13:37:00.000Z",
     "busType": "Urban",
     "originCode": 12,
     "destinationCode": 5
  },
  {
     "startTime": "2015-04-01T17:52:00.000Z",
     "endTime": "2015-04-01T18:50:00.000Z",
     "busType": "Urban",
     "originCode": 39,
     "destinationCode": 7
  },
  {
     "startTime": "2015-04-01T16:36:00.000Z",
     "endTime": "2015-04-01T17:44:00.000Z",
     "busType": "Urban Minibus",
     "originCode": 33,
     "destinationCode": 18
  },
  {
     "startTime": "2015-04-01T07:28:00.000Z",
     "endTime": "2015-04-01T08:49:00.000Z",
     "busType": "Urban Minibus",
     "originCode": 23,
     "destinationCode": 32
  },
  {
     "startTime": "2015-04-01T16:15:00.000Z",
     "endTime": "2015-04-01T17:09:00.000Z",
     "busType": "Urban",
     "originCode": 18,
     "destinationCode": 7
  },
  {
     "startTime": "2015-04-01T07:30:00.000Z",
     "endTime": "2015-04-01T08:06:00.000Z",
     "busType": "Urban",
     "originCode": 44,
     "destinationCode": 21
  },
  {
     "startTime": "2015-04-01T09:55:00.000Z",
     "endTime": "2015-04-01T11:38:00.000Z",
     "busType": "Urban Minibus",
     "originCode": 25,
     "destinationCode": 12
  },
  {
     "startTime": "2015-04-01T08:59:00.000Z",
     "endTime": "2015-04-01T10:12:00.000Z",
     "busType": "Interurban Minibus",
     "originCode": 27,
     "destinationCode": 35
  },
  {
     "startTime": "2015-04-01T13:36:00.000Z",
     "endTime": "2015-04-01T15:18:00.000Z",
     "busType": "Urban Minibus",
     "originCode": 25,
     "destinationCode": 28
  },
  {
     "startTime": "2015-04-01T16:37:00.000Z",
     "endTime": "2015-04-01T18:10:00.000Z",
     "busType": "Urban Minibus",
     "originCode": 49,
     "destinationCode": 11
  },
  {
     "startTime": "2015-04-01T19:04:00.000Z",
     "endTime": "2015-04-01T20:51:00.000Z",
     "busType": "Interurban Minibus",
     "originCode": 24,
     "destinationCode": 47
  },
  {
     "startTime": "2015-04-01T16:49:00.000Z",
     "endTime": "2015-04-01T17:37:00.000Z",
     "busType": "Interurban Minibus",
     "originCode": 30,
     "destinationCode": 44
  },
  {
     "startTime": "2015-04-01T16:31:00.000Z",
     "endTime": "2015-04-01T18:00:00.000Z",
     "busType": "Interurban Minibus",
     "originCode": 16,
     "destinationCode": 38
  },
  {
     "startTime": "2015-04-01T23:34:00.000Z",
     "endTime": "2015-04-02T00:34:00.000Z",
     "busType": "Urban",
     "originCode": 27,
     "destinationCode": 22
  },
  {
     "startTime": "2015-04-01T16:17:00.000Z",
     "endTime": "2015-04-01T18:17:00.000Z",
     "busType": "Interurban",
     "originCode": 7,
     "destinationCode": 5
  }
]`


function App() {
  const jsonArray: Array<any> = JSON.parse(jsonStr)
  const bars = processDriveTimes(jsonArray)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Optibus
        </p>
        {histogram(bars)}      
      </header>
    </div>
  );
}

export default App;


