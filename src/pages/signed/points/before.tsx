import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import { useHistory } from "react-router-dom";
import { TextInput, CheckBox, Box } from "components";
// import { Redirect } from 'react-router-dom'
import { Center, Col, Row, Grid } from "styles/global";

import { SideBarDiv, ChangeButton, DivRT } from "./styles";

import { base } from "../../../config/api";

import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Abas from './abas'
export default function BeforePoints(props) {
  const history = useHistory();
  const [isSelected, setIsSelected] = useState<boolean>(true);
  const [currentTitle, setCurrentTitle] = useState("");
  const [dataTrial, setDataTrial] = useState<any[]>([]);
  const [dataRider, setDataRider] = useState<any[]>([]);
  const [currentRiderInfo, setCurrentRiderInfo] = useState<any>({});
  const [currentTrialInfo, setCurrentTrialInfo] = useState<any>({});

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
  // {
  //   "value_total": [
  //     "12",
  //     "15"
  //   ]
  // }

  return (
    <>
      <Sidebar topnav title="Start Trial" rightIcon="gear" />
      <Center style={{ paddingTop: "80px" }}>
        <Grid>
          <Row>
            <Col xs={12}>
              <Card>
                <CardContent
                // className={classes.content}
                >
                  <div>
                    <Typography gutterBottom variant="h5" component="h2">
                      {currentTitle
                        ? `Trial chosen: ${currentTitle}`
                        : "Trial chosen: None"}
                    </Typography>

                    <div style={{ display: "flex", alignItems: "flex-end" , justifyContent: "space-between",}}>
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
                        onClick={() => console.log(currentRiderInfo)}
                      >
                        START
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Col>

            <Col xs>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  marginTop: "20px",
                  border: "1px solid #e8e8e8",
                  borderRadius: "4px",
                }}
              >
                <ChangeButton
                  isSelected={isSelected === true}
                  onClick={() => setIsSelected(true)}
                >
                  Trials
                </ChangeButton>
                <ChangeButton
                  isSelected={isSelected === false}
                  onClick={() => setIsSelected(false)}
                >
                  Riders
                </ChangeButton>
              </div>
            </Col>

            <Abas/>

            <Col xs={12} style={{ marginTop: "20px" }}>
              <Box noPadding="false" style={{ padding: "20px 20px 0 20px" }}>
                <DivRT>
                  <Row>
                    
                  </Row>
                </DivRT>
              </Box>
            </Col>
          </Row>
        </Grid>
      </Center>
    </>
  );
}
