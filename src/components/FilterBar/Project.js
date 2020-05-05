import React from "react"
import { Card, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    border: "solid 2px #2c3e50",
    width: "30%",
    margin: "2% auto",
    padding: "2%",
    textAlign: 'center',
    background: " linear-gradient(to left, #000000, #434343)",
    color: "white"

  }
})

const Project = ({ project }) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.root}>
        {project.name} ({project.description})
      </Card>
    </div>
  )
}

export default Project