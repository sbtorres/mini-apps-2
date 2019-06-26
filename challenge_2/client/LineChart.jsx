import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.PureComponent {
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
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
            {
                label: "BitCoin Historical Trend",
                data: values,
                fill: false,
                borderColor: 'rgb(66, 241, 244)'
            }
        ]
      },
      options: {
        tooltips: {
          mode: 'x-axis'
        }
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