import React, {Component} from 'react';
import {Bar, Line} from "react-chartjs-2";

class RightLineChart extends Component {
  render() {
    const data = {
      labels: [
        'Loss in Employment Income',
        'Expected Loss in Employment Income',
        'Food Security',
        'Delayed Medical Care',
        'Housing Insecurity',
        'K-12 Educational Changes'],
      datasets: [
        {
          label: 'Week 1',
          borderColor: 'rgba(124,181,236,0.96)',
          backgroundColor: 'rgba(124,181,236,0.09)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [21, 20, 30, 40, 50, 19]
        },
        {
          label: 'Week 2',
          borderColor: 'rgba(117,0,43,0.51)',
          backgroundColor: 'rgba(67,67,72,0.16)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [60, 10, 6, 70, 80, 50]
        },
        {
          label: 'Week 3',
          borderColor: 'rgba(144,237,125,0.93)',
          backgroundColor: 'rgba(144,237,125,0.04)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 80, 60, 70, 40, 19]
        },
        {
          label: 'Week 4',
          borderColor: 'rgba(247,163,93,0.89)',
          backgroundColor: 'rgba(247,163,93,0.17)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 60, 26, 57, 25, 30]
        },
        {
          label: 'Week 5',
          borderColor: 'rgba(129,133,233,0.84)',
          backgroundColor: 'rgba(129,133,233,0.15)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 80, 70, 90, 20, 70]
        },
        {
          label: 'Week 6',
          borderColor: 'rgba(241,92,128,0.76)',
          backgroundColor: 'rgba(241,92,128,0.2)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 30, 70, 80, 20]
        },
        {
          label: 'Week 1',
          borderColor: 'rgba(124,181,236,0.76)',
          backgroundColor: 'rgba(124,181,236,0.16)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [21, 20, 30, 40, 50, 60]
        },
        {
          label: 'Week 2',
          borderColor: 'rgba(67,67,72,0.84)',
          backgroundColor: 'rgba(67,67,72,0.19)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 60, 70, 80, 30]
        },
        {
          label: 'Week 3',
          borderColor: 'rgba(144,237,125,0.85)',
          backgroundColor: 'rgba(144,237,125,0.15)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 20, 20, 70, 80, 80]
        },
        {
          label: 'Week 4',
          borderColor: 'rgba(247,163,93,0.84)',
          backgroundColor: 'rgba(247,163,93,0.14)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 70, 60, 70, 80, 29]
        },
        {
          label: 'Week 5',
          borderColor: 'rgba(129,133,233,0.78)',
          backgroundColor: 'rgba(129,133,233,0.2)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 90, 20, 70, 80, 20]
        },
        {
          label: 'Week 6',
          borderColor: 'rgba(241,92,128,0.62)',
          backgroundColor: 'rgba(241,92,128,0.17)',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 20, 50, 70, 80, 20]
        }]
    };
    const option = {
      legend: {
        position: 'bottom',
        labels: {
          padding: 10,
          usePointStyle: true,
          fontSize: 10
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            gridLines: {
              display: true,
              lineWidth: 1,
              color: 'rgba(0,0,0,0.1)',
              drawBorder: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 25,
              min: 0,
              padding: 20
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
    };
    return (
      <div className="chart-container h-100 w-100">
        <Line
          data={data}
          options={option}
        />
      </div>
    );
  }
}

export default RightLineChart;
