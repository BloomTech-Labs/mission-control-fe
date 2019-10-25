import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjectGroupMembers } from '../../../actions';
import TabPanel from './TabPanel';
import { Tabs, AppBar, Tab } from '@material-ui/core'
import UsersTab from './UsersTab';
import OverviewTab from './OverviewTab';

// Importing data to mock API response
// This data does not directly mock the return from project group members and we will
//    have to figure out a way to gather this information... We may have to do a good amount of 
//      async javascript because it is a GQL server
import res from '../../../data/projectGroupMemberData';

const DashboardMetrics = props => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    getProjectGroupMembers();
    // API call returns an error
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='dashboard-metrics-container'>
      <AppBar position='static' color='default' style={{ boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='inherit'
          variant='fullWidth'
          style={{ backgroundColor: 'white' }}
        >
          <Tab label='Users' style={{ fontSize: '12px' }} />
          <Tab label='Overview' style={{ fontSize: '12px' }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <UsersTab props={res.data.projectGroupMembers} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OverviewTab />
        </TabPanel>
      </AppBar>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    projectStore: state.projectStore
  }
}

export default connect(mapStateToProps, getProjectGroupMembers)(DashboardMetrics);
