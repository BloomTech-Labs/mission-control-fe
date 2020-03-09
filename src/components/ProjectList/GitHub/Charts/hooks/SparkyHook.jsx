import { useState } from 'react';

const useChartData = (props) =>{

    const [chartData] = useState(props);

    return [chartData];
}

export default useChartData;