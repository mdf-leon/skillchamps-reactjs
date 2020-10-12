import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import { useHistory } from "react-router-dom";
import { TextInput, CheckBox } from "components";
// import { Redirect } from 'react-router-dom'
import { Center, Col, Row, Grid } from "styles/global";

import { Options } from "./styles";

import { base } from "../../../config/api";

import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
// abas
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  mainDiv: {
    paddingTop: "50px",
  },
  card: {
    margin: "18px 8px 18px 8px",
  },
  options: {
    display: "flex",
    padding: "16px",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    borderBottom: "1px solid #D5D5D5",
  },
  avatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BeforePoints(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const [currentTitle, setCurrentTitle] = useState("");
  const [dataTrial, setDataTrial] = useState<any[]>([]);
  const [dataRider, setDataRider] = useState<any[]>([]);
  const [currentRiderInfo, setCurrentRiderInfo] = useState<any>({});
  const [currentTrialInfo, setCurrentTrialInfo] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  useEffect(() => {
    let params = { event_id: localStorage.getItem("event_selected") };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
        console.log(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
    base
      .get("/managedRidersList", { params })
      .then((r) => {
        setDataRider(r.data);
        console.log(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <>
      <Sidebar topnav title="Start Trial" rightIcon="gear" />
      <div className={classes.mainDiv}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Card className={classes.card}>
                <CardContent
                // className={classes.content}
                >
                  <div>
                    <Typography gutterBottom variant="h5" component="h2">
                      {currentTitle
                        ? `Trial chosen: ${currentTitle}`
                        : "Trial chosen: None"}
                    </Typography>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                      }}
                    >
                      {currentRiderInfo ? (
                        <div>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="primary"
                            component="p"
                          >
                            {currentRiderInfo.name}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Category: Advanced
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {currentRiderInfo.motorcycle}
                          </Typography>
                        </div>
                      ) : (
                        <div>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Name: Guilhermo del Touro
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Category: Advanced
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Bike: GT5755
                          </Typography>
                        </div>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => history.push("/points")}
                      >
                        START
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Col>

            <div className={classes.root}>
              <AppBar position="static" color="default">
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
              </AppBar>
              <TabPanel value={value} index={0} dir={theme.direction}>
                {dataTrial.map((content) => (
                  <Options
                    onClick={() => {
                      setCurrentTitle(content.name);
                      localStorage.setItem("ongoing_trial", content.id);
                    }}
                  >
                    <Typography
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      Trial: {content.name}
                    </Typography>
                  </Options>
                ))}
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                {dataRider.map((content) => (
                  <Options
                    style={{ justifyContent: "flex-start", alignItems: "end" }}
                    onClick={(e) => {
                      setCurrentRiderInfo({ ...content });
                      localStorage.setItem("ongoing_rider", content.id);
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://img.discogs.com/u7AaUdt7Xw4gfZPovCQljJSXxOM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9136705-1475410670-6244.jpeg.jpg"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "16px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <Typography
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="h6"
                          color="textSecondary"
                          component="h6"
                        >
                          {content.id}.&nbsp;
                        </Typography>
                        <Typography
                          style={{ margin: 0 }}
                          gutterBottom
                          variant="h6"
                          component="h6"
                        >
                          {content.name}
                        </Typography>
                      </div>

                      <Typography
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Category: advanced
                      </Typography>
                      <Typography
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Bike: {content.motorcycle}
                      </Typography>
                    </div>
                  </Options>
                ))}
              </TabPanel>
            </div>
          </Row>
        </Grid>
      </div>
    </>
  );
}
