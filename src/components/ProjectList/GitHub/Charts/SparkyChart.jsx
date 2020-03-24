import React from 'react'
import { Line } from 'react-chartjs-2';
import { ChartDatafier } from './ChartDatafier';

const dataFiller = (label, color, array) => {
  return (
    {
      label: label,
      fill: false,
      lineTension: 0.1,
      borderColor: color,
      borderWidth: 2,
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointRadius: 1,
      pointHitRadius: 10,
      data: array,
    }
  )
}

const SparkyChart = ({ data, height, legend, layout, maxValue, tooltips }) => {
  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false //this will remove all the x-axis grid lines
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true, // max: 1000, //Sets max value to display
        }
      }],
    },
    legend: legend,
    layout: layout,
    tooltips: tooltips,
    title: {
      display: false,
      text: "Last 100 commits:"
    }
  }

  const additions = []
  const deletions = []
  const changedFiles = []

  ChartDatafier(data, additions, deletions, changedFiles, maxValue)

  const chartData = {
    labels: additions,
    datasets: [
      dataFiller('Additions', 'rgba(75,192,192,1)', additions),
      dataFiller('Deletions', 'coral', deletions),
      dataFiller('Changed Files', 'greenyellow', changedFiles)
    ]
  };
  return (
    <div>
      <Line options={options} data={chartData} height={height || 50} />
    </div>
  )
}

export default SparkyChart