// import { useState } from 'react';

// const initialValue = {
//     additions: [],
//     deletions: [],
//     changedFiles: [] 
// };

// export const useSparkyHook = (props) =>{

//     console.log('data hurrr', props.data)

//     const [chartData, setChartData] = useState(initialValue);
//     if (props.data.length){ 
//         props.data.map(data => {
//             setChartData([ ...chartData, [ ...additions, data.additions], [ ...deletions, data.deletions], [ ...changedFiles, data.changedFiles]]);
//         });
//     } else {
//         setChartData(initialValue);
//     }
    
//     console.log(chartData)
//     return [chartData];
// }
