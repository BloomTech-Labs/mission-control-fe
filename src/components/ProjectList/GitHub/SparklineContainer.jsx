import React, { useState } from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/sparklineQuery';
import { Sparkyline } from './Sparkline.module.scss';
import SparkyChart from './Charts/SparkyChart';
import ChartDialog from '../GitHub/Charts/ChartDialog'

const SparklineContainer = ({ name, ghrepos, repoIndex } ) => {

    const [state] = useQuery({
        query, variables: {
            owner: 'Lambda-School-Labs',
            name: name
        }
    });
    const { data } = state;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [dialogOpen, setDialogOpen] = useState({
      'sparkChart': false,
    })
  
    if (!Array.isArray(ghrepos) || !ghrepos.length) return null;
    
    const toggleDialog = name => {
      setDialogOpen({ ...dialogOpen, [name]: !dialogOpen[name] })
    }
  
    const handleSparkClick = (repoIndex) => {
      toggleDialog('sparkChart')
      setCurrentIndex(repoIndex)
    }

    if (state.fetching) {
        return <p>Loading Sparkline...</p>
    } else if (state.error) {
        return <p>Error: Sparkline unavailable.</p>
    } else if (data.SparkyBoy.length) {
        return (
            <>
                <div className={Sparkyline} onClick={() => handleSparkClick(repoIndex)}>
                    <SparkyChart data={data} tooltips={{ enabled: false }} maxValue={1000} />
                    <ChartDialog
                        ghrepos={ghrepos}
                        name={ghrepos[currentIndex].name}
                        open={dialogOpen['sparkChart']}
                        toggleDialog={toggleDialog}
                        onClose={() => toggleDialog('sparkChart')}
                        projectName={name}
                        setCurrentIndex={setCurrentIndex}
                        currentIndex={currentIndex}
                        data={data}
                        state={state}
                    />
                </div>
            </>
        );
    } else {
        return (
            <p>Sparkline unavailable</p>
        )
    }
};

export default SparklineContainer;