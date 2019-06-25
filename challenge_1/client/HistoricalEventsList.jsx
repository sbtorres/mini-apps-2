import React from 'react';
import HistoricalEvent from './HistoricalEvent.jsx';

const HistoricalEventsList = (props) => (
  <div>
    {props.historicalEvents.map((historicalEvent) => {
      return (
        <HistoricalEvent historicalEvent={historicalEvent} />
      )
    })}
  </div>
);

export default HistoricalEventsList;