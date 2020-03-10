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
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: additions,
          },
          {
            label: 'Deletions',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'coral',
            borderColor: 'coral',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: 'coral',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'coral',
            pointHoverBorderColor: 'coral',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: deletions,
          },
          {
            label: 'Changed Files',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'greenyellow',
            borderColor: 'greenyellow',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBorderColor: 'greenyellow',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'greenyellow',
            pointHoverBorderColor: 'coral',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: changedFiles
          },
        ]
      };
    // console.log(data);
    return(
        <div>
            <Line options={options} data={data} height={50}/>
        </div>
    )
}

export default SparkyChart