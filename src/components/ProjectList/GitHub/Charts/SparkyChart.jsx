import React from 'react'
import { Line } from 'react-chartjs-2';


  

const SparkyChart = ({ additions, deletions, changedFiles }) =>  {
    const options ={
        scales:{
            xAxes: [{
                display: false //this will remove all the x-axis grid lines
            }]
        }
    }
      
    const data2  = {
        labels: additions.reverse(),        
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
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: additions.reverse(),
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
            pointBorderColor: 'coral',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'coral',
            pointHoverBorderColor: 'coral',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: deletions.reverse()
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
            pointBorderColor: 'greenyellow',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'greenyellow',
            pointHoverBorderColor: 'coral',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: changedFiles.reverse()
          },
        ]
      };
    // console.log(data);
    return(
        <div>
            <Line options={options}data={data2}/>
        </div>
    )
}

export default SparkyChart