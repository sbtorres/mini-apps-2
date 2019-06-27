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
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Bitcoin Value ($)',
            },
            ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '$' + value;
                }
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Date',
            }
          }],
        },
        title: {
          display: true,
          position: 'top',
          text: 'Bitcoin Historical Stock Chart'
        },
        legend: {
          display: true,
          position: 'bottom',
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