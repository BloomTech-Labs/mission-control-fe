import React, { useState } from 'react';
import { Maintainability } from './letterGrade.module.scss';
import LetterGrade from './LetterGrade';
import getColor from '../../../utils/getColorFromCCGrade';
import ChartDialog from '../GitHub/Charts/ChartDialog'

const LetterGradeContainer = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dialogOpen, setDialogOpen] = useState({
    'sparkChart': false,
  })

  if (!props.ccrepos || !props.ccrepos.length) return null;


  const toggleDialog = name => {
    setDialogOpen({ ...dialogOpen, [name]: !dialogOpen[name] })
  }

  const handleSparkClick = (repoIndex) => {
    toggleDialog('sparkChart')
    setCurrentIndex(repoIndex)
  }

  return (
    <>
      <ChartDialog
        ccrepos={props.ccrepos}
        name={props.ccrepos[currentIndex].name}
        open={dialogOpen['sparkChart']}
        toggleDialog={toggleDialog}
        onClose={() => toggleDialog('sparkChart')}
        projectName={props.name}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex} />

      <div className={Maintainability}>
        {props.ccrepos.map((repo, index) => {
          const color = getColor(repo.grade);
          return <LetterGrade
            key={repo.name}
            ccrepos={props.ccrepos}
            color={color}
            repo={repo}
            repoIndex={index}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            projectName={props.name}
            handleSparkClick={handleSparkClick} />
        })}
      </div>
    </>
  );
};

export default LetterGradeContainer;
