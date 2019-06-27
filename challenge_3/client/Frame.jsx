import React from 'react';

const Frame = (props) => {
  if (typeof props.tableRow === 'string') {
    return (
      <td>{props.tableRow}</td>
    )
  } else if (props.tableRow.length === 3) {
    return (
      <td>{props.tableRow[0]} {props.tableRow[1]} {props.tableRow[2]}</td>
    )
  } else {
    return (
        <td>{props.tableRow[0]} {props.tableRow[1]}</td>
    )
  }
}

export default Frame;