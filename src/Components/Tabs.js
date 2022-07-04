import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddNews from './News/AddNews';
import ManageNews from './News/ManageNews';
import FetchData from './News/FetchData';
import Fetch2 from './News/Fetch2';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <React.Fragment>
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </React.Fragment>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Add" {...a11yProps(0)} />
          <Tab label="Manage" {...a11yProps(1)} />
          <Tab label="Unused" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AddNews />  
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ManageNews />
      </TabPanel>
      <TabPanel value={value} index={2}>
        May be used in Future..
        {/* <FetchData /> */}
        <Fetch2 />
      </TabPanel>
    </Box>
    </>
  );
}

/*
Export To -
1. SideDrawer.js
*/