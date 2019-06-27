import React from 'react';

const Frame = (props) => {
  if (typeof props.tableRow === 'string') {
    return (
      <td>{props.tableRow}</td>
    )
  } else {
    return (
      <React.Fragment>
        <td>{props.tableRow[0]} {props.tableRow[1]}</td>
      </React.Fragment>
    )
  }
}

export default Frame;