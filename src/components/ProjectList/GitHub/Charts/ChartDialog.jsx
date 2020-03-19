import React from 'react'
import SparkyChart from './SparkyChart'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import ArrowBack from '@material-ui/icons/ArrowBack'
import ArrowForward from '@material-ui/icons/ArrowForward'
// import { useQuery } from 'urql';
// import { SPARKLINE as query } from '../../Queries/sparklineQuery';
import { title } from '../../ProjectListRow/projectListRow.module.scss'
import { chartContainer, sparklineModalContainer, rightModalArrow, leftModalArrow, modalChart, modalHeader, closeButton } from './chartDialog.module.scss'

const useStyles = makeStyles({
    dialogPaper: {
        minHeight: '32vh'
    }
})

export default (props) => {
    
    const classes = useStyles()

    // const [state] = useQuery({
    //     query, variables: {
    //         owner: 'Lambda-School-Labs',
    //         name: props.name
    //     }
    // });

    // const { data } = state;

    const legend = {
        display: true,
        position: 'bottom'
    }

    const tooltips = {
        enabled: true
    }

    const layout = {
        padding: {
            left: 0,
            right: 0,
            top: 20,
            bottom: 0
        }
    }

    const changeIndex = (direction) => {
        const maxLength = (props.ghrepos.length - 1)
        switch (direction) {
            case 'decrement': {
                if (props.currentIndex === 0) {
                    return (maxLength)
                }
                else {
                    return (props.currentIndex - 1)
                }
            }
            case 'increment': {
                if (props.currentIndex === maxLength) {
                    return 0
                }
                else {
                    return (props.currentIndex + 1)
                }
            }
            // default:{
            //     break
            // }
        }
    }

    if (props.state.fetching) {
        return <p>Loading Sparkline...</p>
    } else if (props.state.error) {
        return <p>Error: Sparkline unavailable.</p>
    } else if (props.data.SparkyBoy.length) {
        return (
            <Dialog
                open={props.open}
                onClose={props.onClose}
                fullWidth={true}
                maxWidth={'sm'}
                classes={{ paper: classes.dialogPaper }}>
                <DialogTitle className={title} id="sparkline-chart-title">
                    <div className={modalHeader}>
                        {props.projectName}
                        <span className={closeButton} onClick={() => props.toggleDialog('sparkChart')}>
                            X
                        </span>
                    </div>
                    <p style={{ color: "#A7A7A7", fontWeight: "400" }}> {props.name}</p>
                </DialogTitle>
                <div className={sparklineModalContainer}>
                    <ArrowBack className={leftModalArrow} onClick={() => { props.setCurrentIndex(changeIndex('decrement')) }} />
                    <div className={chartContainer}>
                        {props.data ?
                            <SparkyChart
                                className={modalChart}
                                border={1}
                                legend={legend}
                                layout={layout}
                                tooltips={tooltips}
                                data={props.data}
                                height={200}
                                maxValue={10000000} />
                            : <p>"Loading..."</p>}
                    </div>
                    <ArrowForward className={rightModalArrow} onClick={() => { props.setCurrentIndex(changeIndex('increment')) }} />
                </div>
            </Dialog>
        );
    } else {
        return (
            <p>Sparkline unavailable</p>
        )
    }
}