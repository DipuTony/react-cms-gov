import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

const drawerWidth = 240;

export default function SideDrawer({ header, fun }) { //Header Comes Directly From Diffrent Master Pages using Props

  const [ulbid, setUlbid] = useState();
  const [ulblabel, setUlblabel] = useState();

  // react-dropdown
  const options = [
    // 'Ranchi', 'Dhanbad', 'Bokaro', 'Jamsedpur'
    { value: 1, label: 'Ranchi' },
    { value: 2, label: 'Dhanbad' },
    { value: 3, label: 'Bokaro' },
    { value: 4, label: 'Jamsedpur' }

  ];
  const defaultOption = options[1];

  const drodownHandle = (e) => {
    setUlbid(e.value)
    setUlblabel(e.label)
    fun(e)
    // console.log("Clicked", e.value)
  }

  // react-dropdown End

  const itemsList = [
    {
      text: "Home",
      icon: <MailIcon />,
      to: "/" // <-- add link targets
    },
    {
      text: "EventMaster",
      icon: <MailIcon />,
      to: "/EventMaster" // <-- add link targets
    },
    {
      text: "News Master",
      icon: <InboxIcon />,
      to: "/NewsMaster"
    },
    {
      text: "Announcement",
      icon: <InboxIcon />,
      to: "/AnnouncementMaster"
    }
  ];

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {header} {ulblabel && "For"}  {ulblabel}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <p className='bg-sky-200'>
            <Dropdown
              className='bg-sky-300'
              options={options}
              value={defaultOption}
              // onload ={drodownHandle}
              onChange={drodownHandle}
              placeholder="Select ULB"
            /></p>
          <Divider />
          <List>
            {itemsList.map((item, index) => {
              const { text, icon } = item;
              return (
                <ListItem component={Link} to={item.to} key={text}>
                  <ListItemButton>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
            {/* <Tab /> */}
          </Typography>
        </Box>
      </Box>
    </>
  );
}


/*
Export To -
All Master Pages.. 
*/