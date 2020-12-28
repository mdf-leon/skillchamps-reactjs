import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  // Card,
  // CardContent,
  // Button,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core';

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabNav(props: any) {
  const {
    // children,
    // value,
    // index,
    // tabIndex,
    // handleChange,
    tabList,
    // ...other
  } = props;

  const theme = useTheme();

  const [in_tabIndex, setin_tabIndex] = React.useState<number>(0);
  const in_handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    event.preventDefault();
    setin_tabIndex(newValue);
  };

  const renderTab = (label, index, rest = {}) => {
    return <Tab label={label} {...a11yProps(index)} {...rest} />;
  };

  return (
    <div style={{ width: '100%' }}>
      <AppBar position="static" color="default">
        <Tabs
          value={in_tabIndex}
          //value={tabIndex || in_tabIndex}
          onChange={(e, nv) => {
            in_handleChange(e, nv);
            // handleChange(e, nv) || in_handleChange(e, nv);
          }}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          {tabList.map((tab, index) =>
            renderTab(tab.label, index, tab.props || {})
          )}
        </Tabs>
      </AppBar>
      {tabList.map((tab, index) => {
        return (
          <TabPanel value={in_tabIndex} index={index} dir={theme.direction}>
            {tab.body}
          </TabPanel>
        );
      })}
    </div>
  );
}
