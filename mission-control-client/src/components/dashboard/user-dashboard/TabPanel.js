import React from "react";
import { Typography, Box } from '@material-ui/core';

const TabPanel = props => {
    const { children, value, index } = props;
  
    return (
      <Typography
        component='div'
        role='tabpanel'
        hidden={value !== index}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  };

export default TabPanel;
