import React, { useState } from 'react';
import { Tabs, AppBar, Tab, Typography, Box } from '@material-ui/core'

// ToDo: connect to redux store and getPeople connected to this project
// ToDo: Create a sub-component called tabs that will take in the tab info and also hold
//        the teammate cards

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      // id={`full-width-tabpanel-${index}`}
      // aria-labelledby={`full-width-tab-${index}`}
      // {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const DashboardMetrics = () => {
  // Set value for tab content
  const [value, setValue] = useState(0);
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='dashboard-metrics-container' style={{ marginTop: '50px' }}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          // aria-label="user dashboard metrics tab bar"
        >
          <Tab label="Users" />
          <Tab label="Overview" />
        </Tabs>

        <TabPanel value={value} index={0}>
          Users
        </TabPanel>
        <TabPanel value={value} index={1}>
          Overview
        </TabPanel>
      </AppBar>
    </div>
  )
}

export default DashboardMetrics;