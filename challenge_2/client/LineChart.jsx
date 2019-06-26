import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();

    this.state = {};
    this.buildChart = this.buildChart.bind(this);
  }

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart() {
    const { dates, values } = this.props;
    console.log(dates);
    console.log(values);
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
            {
                label: "BitCoin Historical Trend",
                data: values,
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