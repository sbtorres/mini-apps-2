import React from 'react';

const HistoricalEvent = (props) => (
  <div>
    <div>{props.historicalEvent.date}</div>
    <div>{props.historicalEvent.description}</div>
  </div>
)

export default HistoricalEvent;