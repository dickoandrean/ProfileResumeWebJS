import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import AssessmentIcon from '@material-ui/icons/Assessment';
import RoomIcon from '@material-ui/icons/Room';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './bottomnav.css';
import Profile from './Profile';
import School from './school';
import Experiences from './Experiences';
import Skills from './Skills';
import ContactMe from './ContactMe';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BottomNav() {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          className='btmnav'
          indicatorColor='secondary'
        >
          <Tab label="Profile" icon={<AccountCircleIcon />} {...a11yProps(0)} />
          <Tab label="Educations" icon={<SchoolIcon />} {...a11yProps(1)} />
          <Tab label="Experiences" icon={<WorkIcon />} {...a11yProps(2)} />
          <Tab label="skills" icon={< AssessmentIcon />} {...a11yProps(3)} />
          <Tab label="Contact Me" icon={<RoomIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <div className='box'>
      <TabPanel className='animated' value={value} index={0}>
          <Profile />
      </TabPanel>
      <TabPanel className='animated' value={value} index={1}>
        <School />
      </TabPanel>
      <TabPanel className='animated' value={value} index={2}>
        <Experiences />
      </TabPanel>
      <TabPanel className='animated' value={value} index={3}>
        <Skills />
      </TabPanel>
      <TabPanel className='animated' value={value} index={4}>
        <ContactMe />
      </TabPanel>
      </div>
    </div>
  );
}
