import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddNews from './News/AddNews';
import SingleView from './News/SingleView';
import ListTableParent from './ListTable/ListTableParent';
import ReactModel from './Model/WorkflowList';

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

export default function BasicTabs({title, ulbinfo}) { //Title Comes Diretly From Diffrent Master Pages using Props
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div component={'span'} variant={'body2'} className="ml-60 -mt-16">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={`Add ${title} ${ulbinfo.label}`} {...a11yProps(0)} />
            <Tab label={`View ${title} ${ulbinfo.label}`} {...a11yProps(1)} />
            <Tab label="React Data Table" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AddNews title={`${title}`} ulbid={`${ulbinfo.value}`}  ulblabel={`${ulbinfo.label}`} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ReactModel title={`${title}`} />
          <SingleView />               {/* Props Not Passed */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <ReactDataTable /> */}
          <ListTableParent />
        </TabPanel>
      </Box>
    </div>
  );
}

/*
Export To -
1. Master Pages
*/