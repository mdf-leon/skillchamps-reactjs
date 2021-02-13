import React, { useState, useEffect } from 'react';
import AppBar from 'components/AppBar';
import Message from 'components/Message';
import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router-dom'
import { Col, Row, Grid } from 'styles/global';
import { Options } from './styles';

import { base } from '../../../config/api';

import {
  Card,
  CardContent,
  Button,
  Typography,
  Avatar,
} from '@material-ui/core';
// abas
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBarTab from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
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

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  mainDiv: {},
  card: {
    margin: '18px 8px 18px 8px',
  },
  options: {
    cursor: 'pointer',
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BeforePoints(props) {
  const classes = useStyles();
  const { institute_id, event_id } = useParams();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const [currentTitle, setCurrentTitle] = useState('');
  const [dataTrial, setDataTrial] = useState<any[]>([]);
  const [dataRider, setDataRider] = useState<any[]>([]);
  const [currentRiderInfo, setCurrentRiderInfo] = useState<any>({});
  // const [currentTrialInfo, setCurrentTrialInfo] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    // console.log(props.location.state.a);

    let params = { event_id };
    base
      .get('/managedTrialsList', { params })
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
    base
      .get('/managedRidersList3', {
        params: { ...params, trial_id: localStorage.getItem('ongoing_trial') },
      })
      .then((r) => {
        setDataRider(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('ongoing_trial')]);

  useEffect(() => {
    localStorage.removeItem('ongoing_trial');
    console.log(localStorage.getItem('ongoing_trial'));
  }, []);

  return (
    <div>
      <Message {...props} />
      <AppBar title="Choose rider to Score" isManager {...props} />
      <div className={classes.mainDiv}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <div>
                    <Typography component={'span'} gutterBottom variant="h5">
                      {currentTitle
                        ? `Trial chosen: ${currentTitle}`
                        : 'Trial chosen: None'}
                    </Typography>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      minHeight: '75px',
                    }}
                  >
                    {currentRiderInfo ? (
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          component={'span'}
                          gutterBottom
                          variant="body2"
                          color="primary"
                        >
                          {currentRiderInfo.name || 'name'}
                        </Typography>
                        <Typography
                          component={'span'}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          {currentRiderInfo.category || 'category'}
                        </Typography>
                        <Typography
                          component={'span'}
                          gutterBottom
                          variant="body2"
                          color="textSecondary"
                        >
                          {currentRiderInfo.motorcycle || 'motorcycle'}
                        </Typography>
                      </div>
                    ) : null}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => history.push('/points')}
                    >
                      START
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Col>

            <div className={classes.root}>
              <AppBarTab position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="TRIALS" {...a11yProps(0)} />
                  <Tab label="RIDERS" {...a11yProps(1)} />
                </Tabs>
              </AppBarTab>
              <TabPanel value={value} index={0} dir={theme.direction}>
                {dataTrial[0] ? (
                  dataTrial.map((content, i) => (
                    <Options
                      key={`trials-${i}-${content.id}`}
                      className={classes.options}
                      onClick={() => {
                        localStorage.removeItem('ongoing_rider');
                        setCurrentRiderInfo({});
                        setCurrentTitle(content.name);
                        localStorage.setItem('ongoing_trial', content.id);
                      }}
                    >
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                      >
                        Trial: {content.name}
                      </Typography>
                    </Options>
                  ))
                ) : (
                  <Typography
                    component={'span'}
                    style={{ margin: 0 }}
                    gutterBottom
                    variant="h6"
                  >
                    This event don't have any trial yet.
                  </Typography>
                )}
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                {localStorage.getItem('ongoing_trial') ? (
                  dataRider[0] ? (
                    dataRider.map((content, i) => (
                      <Options
                        key={`riders-${i}-${content.id}`}
                        className={classes.options}
                        style={{
                          justifyContent: 'flex-start',
                          alignItems: 'end',
                        }}
                        onClick={() => {
                          if (!content.scores) {
                            setCurrentRiderInfo({ ...content });
                            localStorage.setItem('ongoing_rider', content.id);
                          }
                          return;
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://img.discogs.com/u7AaUdt7Xw4gfZPovCQljJSXxOM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9136705-1475410670-6244.jpeg.jpg"
                        />
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            marginLeft: '16px',
                          }}
                        >
                          <div style={{ display: 'flex' }}>
                            <Typography
                              component={'span'}
                              style={{ margin: 0 }}
                              gutterBottom
                              variant="h6"
                              color="textSecondary"
                            >
                              {content.id}.&nbsp;
                            </Typography>
                            <Typography
                              component={'span'}
                              style={{
                                margin: 0,
                                color: content.scores ? '#2ECC40' : 'unset',
                              }}
                              gutterBottom
                              variant="h6"
                            >
                              {content.name}
                            </Typography>
                          </div>

                          <Typography
                            component={'span'}
                            style={{ margin: 0 }}
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                          >
                            {content.category}
                          </Typography>
                          <Typography
                            component={'span'}
                            style={{ margin: 0 }}
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                          >
                            Bike: {content.motorcycle}
                          </Typography>
                        </div>
                      </Options>
                    ))
                  ) : (
                    <Typography
                      component={'span'}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                    >
                      This trial don't have any riders yet.
                    </Typography>
                  )
                ) : (
                  <Typography
                    component={'span'}
                    style={{ margin: 0 }}
                    gutterBottom
                    variant="h6"
                  >
                    Please choose a trial first.
                  </Typography>
                )}
              </TabPanel>
            </div>
          </Row>
        </Grid>
      </div>
    </div>
  );
}
