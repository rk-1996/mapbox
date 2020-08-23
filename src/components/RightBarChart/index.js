import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class RightBarChart extends Component {
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
          borderColor: '#7cb5ec',
          backgroundColor: '#7cb5ec',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [21, 20, 30, 40, 50, 19]
        },
        {
          label: 'Week 2',
          borderColor: '#434348',
          backgroundColor: '#434348',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [60, 50, 6, 70, 80, 90]
        },
        {
          label: 'Week 3',
          borderColor: '#90ed7d',
          backgroundColor: '#90ed7d',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 60, 70, 40, 19]
        },
        {
          label: 'Week 4',
          borderColor: '#f7a35d',
          backgroundColor: '#f7a35d',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 26, 57, 25, 30]
        },
        {
          label: 'Week 5',
          borderColor: '#8185e9',
          backgroundColor: '#8185e9',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 60, 90, 20, 70]
        },
        {
          label: 'Week 6',
          borderColor: '#f15c80',
          backgroundColor: '#f15c80',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 60, 70, 80, 20]
        },
        {
          label: 'Week 1',
          borderColor: '#7cb5ec',
          backgroundColor: '#7cb5ec',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [21, 20, 30, 40, 50, 60]
        },
        {
          label: 'Week 2',
          borderColor: '#434348',
          backgroundColor: '#434348',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 50, 60, 70, 80, 30]
        },
        {
          label: 'Week 3',
          borderColor: '#90ed7d',
          backgroundColor: '#90ed7d',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 20, 20, 70, 80, 80]
        },
        {
          label: 'Week 4',
          borderColor: '#f7a35d',
          backgroundColor: '#f7a35d',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 70, 60, 70, 80, 29]
        },
        {
          label: 'Week 5',
          borderColor: '#8185e9',
          backgroundColor: '#8185e9',
          barPercentage: 1,
          barThickness: 3,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [40, 90, 20, 70, 80, 90]
        },
        {
          label: 'Week 6',
          borderColor: '#f15c80',
          backgroundColor: '#f15c80',
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
        <Bar
          data={data}
          options={option}
        />
      </div>
    );
  }
}

export default RightBarChart;
