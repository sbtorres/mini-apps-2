import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();

    this.state = {};
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "March"],
        datasets: [
            {
                label: "BitCoin Historical Trend",
                data: [1000.00, 1540.02, 2000.31],
            }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    )
  }
}

export default LineChart;