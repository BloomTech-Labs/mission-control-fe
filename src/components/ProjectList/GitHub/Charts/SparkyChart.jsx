import React from 'react'
import { Line } from 'react-chartjs-2';

const SparkyChart = ({ additions, deletions, changedFiles }) =>  {
    const options = {
        maintainAspectRatio: false,
        scales:{
            xAxes: [{
                display: false //this will remove all the x-axis grid lines
            }],
            yAxes: [{
                display: false,
                ticks: {
                  beginAtZero: true,
                  max: 1000, //Sets max value to display
                }
            }],
        },
        legend:{
            display: false,
            position: 'left'
        },
    }
      
    const data  = {
        labels: additions,        
        datasets: [
          {
            label: 'Additions',
            fill: false,
            lineTension: 0.1,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: additions,
          },
          {
            label: 'Deletions',
            fill: false,
            lineTension: 0.1,
            borderColor: 'coral',
            borderWidth: 2,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: deletions,
          },
          {
            label: 'Changed Files',
            fill: false,
            lineTension: 0.1,
            borderColor: 'greenyellow',
            borderWidth: 2,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointRadius: 1,
            pointHitRadius: 10,
            data: changedFiles
          },
        ]
      };
    return(
        <div>
            <Line options={options} data={data} height={50}/>
        </div>
    )
}

export default SparkyChart