import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextInput, CheckBox, Box } from 'components';
// import { Redirect } from 'react-router-dom'
import { Center, Card, Col, Row, Grid } from 'styles/global'

import { SideBarDiv, ChangeButton, DivRT } from './styles'

import { base } from "../../../config/api";

export default function BeforePoints(props) {
  const history = useHistory();
  const [isSelected, setIsSelected] = useState(true)
  const [isSelected2, setIsSelected2] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const [dataTrial, setDataTrial] = useState([])
  const [dataRider, setDataRider] = useState([])
  const [currentRiderInfo, setCurrentRiderInfo] = useState([])
  const [currentTrialInfo, setCurrentTrialInfo] = useState([])

  useEffect(() => {
    let params = { "event_id": localStorage.getItem('event_selected') }
    base.get('/managedTrialsList', { params })
      .then((r) => {
        setDataTrial(r.data)
        console.log(r.data)
      })
      .catch((er) => {
        console.log(er)
      })
    base.get('/managedRidersList', { params })
      .then((r) => {
        setDataRider(r.data)
        console.log(r.data)
      })
      .catch((er) => {
        console.log(er)
      })
  }, [])
  // {
  //   "value_total": [
  //     "12",
  //     "15"
  //   ]
  // }
  const handleChangeButton = e => {
    setIsSelected(!isSelected)
    setIsSelected2(!isSelected2)

  };

  return (
    <>

      <Center>
        <Card>
          <Grid>
            <Row>
              <Col xs={12}>
                <Box>
                  {
                    currentTitle
                      ?
                      <h2 style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8" }}>
                        {currentTitle}
                      </h2>
                      :
                      <h2 style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8" }}>
                        Trial
                      </h2>
                  }

                  {
                    currentRiderInfo
                      ?
                      <div>
                        <p>{currentRiderInfo.name}</p>
                        <p>Category: Advanced</p>
                        <p>{currentRiderInfo.motorcycle}</p>
                      </div>
                      :
                      <div>
                        <p>Name: Guilhermo del Touro</p>
                        <p>Category: Advanced</p>
                        <p>Bike: GT5755</p>
                      </div>
                  }
                </Box>
              </Col>

              <Col xs>
                <div style={{
                  display: "flex", textAlign: "center", marginTop: "20px",
                  border: "1px solid #e8e8e8", borderRadius: "4px"
                }}>
                  <ChangeButton isSelected={isSelected} onClick={() => handleChangeButton()}>
                    Trials
                  </ChangeButton>
                  <ChangeButton isSelected={isSelected2} onClick={() => handleChangeButton()}>
                    Riders
                  </ChangeButton>
                </div>
              </Col>

              <Col xs={12} style={{ marginTop: "20px" }}>
                <Box noPadding="true" style={{ padding: "20px 20px 0 20px" }}>
                  <DivRT>
                    <Row>
                      {
                        isSelected === true
                          ?
                          dataTrial.map((content) => (
                            <Col style={{ marginBottom: "20px" }} xs={6}>
                              <button onClick={() => {
                                setCurrentTitle(content.name);
                                localStorage.setItem('ongoing_trial', content.id)
                              }}>
                                Trial: {content.name}
                              </button>
                            </Col>
                          ))
                          :
                          dataRider.map((content) => (
                            <Col style={{ marginBottom: "20px" }} xs={6}>
                              <button style={{ display: "flex", flexDirection: "column" }} onClick={(e) => {
                                setCurrentRiderInfo({ ...content })
                                localStorage.setItem('ongoing_rider', content.id)
                              }}>
                                <p>Name: {content.name}</p>
                                <p>Category: advanced</p>
                                <p>Bike: {content.motorcycle}</p>
                              </button>
                            </Col>
                          ))
                      }
                    </Row>
                  </DivRT>
                </Box>
              </Col>
              <Col xs={12} isTopSpaced style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button onClick={() => history.push("/points")}>
                  Next
                </Button>
              </Col>
            </Row>
          </Grid>
        </Card>
      </Center>
    </>
  );
}
