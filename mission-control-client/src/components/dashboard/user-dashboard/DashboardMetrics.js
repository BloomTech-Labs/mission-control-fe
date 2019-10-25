import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjectGroupMembers } from '../../../actions';
import TabPanel from './TabPanel';
import { Tabs, AppBar, Tab } from '@material-ui/core'
import UsersTab from './UsersTab';
import OverviewTab from './OverviewTab';

import res from '../../../data/projectGroupMemberData';

const DashboardMetrics = props => {
  console.log(props);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // getProjectGroupMembers();
    // API call returns an error
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='dashboard-metrics-container' style={{ backgroundColor: '#E7EBFF', marginTop: '50px' }}>
      <AppBar position='static' color='default' style={{ boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='inherit'
          variant='fullWidth'
          style={{ backgroundColor: 'white' }}
        >
          <Tab label='Users' />
          <Tab label='Overview' />
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
