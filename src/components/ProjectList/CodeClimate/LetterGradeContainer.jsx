import React, { useState } from 'react';
import { Maintainability } from './letterGrade.module.scss';
import LetterGrade from './LetterGrade';
import getColor from '../../../utils/getColorFromCCGrade';
import ChartDialog from '../GitHub/Charts/ChartDialog'
// this component checks if the ghrepos prop is an array and has length to it and if it does it renders and passes down the full array of ghrepos to ChartDialog and maps over each repo and renders the name and grade on screen
const LetterGradeContainer = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dialogOpen, setDialogOpen] = useState({
    'sparkChart': false,
  })

  if (!Array.isArray(props.ghrepos) || !props.ghrepos.length) return null;
  
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
        ghrepos={props.ghrepos}
        name={props.ghrepos[currentIndex].name}
        open={dialogOpen['sparkChart']}
        toggleDialog={toggleDialog}
        onClose={() => toggleDialog('sparkChart')}
        projectName={props.name}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex} />
      <div className={Maintainability}>
        {props.ghrepos.map((repo, index) => {
          const color = getColor(repo.grade);
          return <LetterGrade
            key={repo.name}
            ghrepos={props.ghrepos}
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
