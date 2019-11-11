import React, { useState } from 'react';
import { connect } from 'react-redux';
import TabPanel from './TabPanel';
import { Tabs, AppBar, Tab } from '@material-ui/core'
import UsersTab from './UsersTab';
import OverviewTab from './OverviewTab';

const DashboardMetrics = props => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='dashboard-metrics-container' style={{ marginTop: '5rem' }}>
      <AppBar position='static' color='default' style={{ boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='inherit'
          variant='fullWidth'
          style={{ backgroundColor: 'white' }}
        >
          <Tab label='Members' style={{ fontSize: '1.2rem' }} />
          <Tab label='Overview' style={{ fontSize: '1.2rem' }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <UsersTab project={props.activeProjectStore.active} />
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
    activeProjectStore: state.activeProjectStore
  }
}

export default connect(mapStateToProps, null)(DashboardMetrics);
