import React from 'react';
import HistoricalEvent from './HistoricalEvent.jsx';

const HistoricalEventsList = (props) => (
  <div>
    {props.historicalEvents.map((historicalEvent, index) => {
      return (
        <HistoricalEvent key={index} historicalEvent={historicalEvent} />
      )
    })}
  </div>
);

export default HistoricalEventsList;