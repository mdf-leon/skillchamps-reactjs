import React, { useState, useEffect } from "react";
import { Button, Box, Modal } from 'components';
import { Center, Card, Col, Row, Grid } from 'styles/global'
import { DateTime } from "luxon";
import { SideBarDiv, TimeDiv, RoundButton, NumberBox, TimeInput } from './styles'
import { base } from "../../../config/api";
import Sidebar from "../../../components/navbar/sidebar";

import { AiOutlineMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const penaltiesConf = [
  {
    "id": 12,
    "event_id": 1,
    "name": "slow ride",
    "created_at": "2020-07-04 20:19:13",
    "updated_at": "2020-07-04 20:19:13"
  },
  {
    "id": 27,
    "event_id": 1,
    "name": "slow 2",
    "created_at": "2020-07-04 20:19:13",
    "updated_at": "2020-07-04 20:19:13"
  }
]

export default function BeforePoints(props) {
  const [activeModal, setactiveModal] = useState(false)


  const [point, setpoint] = useState({
    "rider_id": localStorage.getItem('ongoing_rider'),
    "trial_id": localStorage.getItem('ongoing_trial'),
    "time": "0",
  })

  const [pens, setpens] = useState([])

  // useEffect(() => {
  //   console.log(pens);
  // }, [pens])

  useEffect(() => {
    base.get(`/showRider`)
  }, [])

  useEffect(() => {
    if (point.penalties)
      setactiveModal(confirm)
  }, [point])

  const handleSubmit = e => {
    e.preventDefault()
    const temp = []
    for (const i in pens) {
      if (pens[i]) {
        temp.push({
          "penalty_conf_id": i,
          "quantity": pens[i]
        })
      }
    }
    // pens.map((p, i) => {
    //   if (p) {
    //     temp.push({
    //       "penalty_conf_id": i,
    //       "quantity": p
    //     })
    //   }
    // })
    setpoint({ ...point, penalties: temp })
  }

  const penalty = (pen) => (
    <div style={{ margin: "20px" }}>
      <h2>{pen.id}.{pen.name}</h2>

      <div style={{ display: "flex", marginTop: "10px", width: "100%", justifyContent: "center" }}>
        <RoundButton onClick={e => {
          const temp = [...pens]
          temp[pen.id] = (temp[pen.id] || 0) - 1
          setpens(temp)
        }}>
          <AiOutlineMinusCircle size="50" color="red" />
        </RoundButton>

        <NumberBox>
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <h2 style={{ margin: "0" }}>{pens[pen.id] || 'none'}</h2>
          </div>
        </NumberBox>

        <RoundButton onClick={e => {
          const temp = [...pens]
          temp[pen.id] = (temp[pen.id] || 0) + 1
          setpens(temp)
        }}>
          <AiFillPlusCircle size="50" color="red" />
        </RoundButton>
      </div>
    </div>
  )

  const cancel = <div style={{ textAlign: "left" }}>
    <h3>Are you sure you want to cancel<br /> the score for this runner?</h3>
    <p>current scores will be deleted</p>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      <Button
        width="100%"
        profile="ghost"
        style={{ color: "red", border: "1px solid red", marginRight: "10px" }}
        onClick={() => setactiveModal(false)}
      >Delete points</Button>
      <Button
        width="100%"
        onClick={() => setactiveModal(false)}
      >Continue scoring</Button>
    </div>
  </div>

  const confirm = <div style={{ textAlign: "left" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ marginRight: "59px" }}>
        <p>
          Name: NAME<br />
          Category: CATEGORY<br />
          Position*: POSITION<br />
        </p>
      </div>
      <div>
        <h3 style={{ margin: "0" }}>Realized Time</h3>
        <h1 style={{ margin: "0" }}>00:00:00</h1>
      </div>
    </div>

    <div>
      {point.penalties ? point.penalties.map((penalty) => {
        return <p>{penaltiesConf.find(e => e.id === parseInt(penalty.penalty_conf_id)).name} --- {penalty.quantity}</p>
      }) : null}

    </div>

    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      <Button
        width="100%"
        profile="ghost"
        style={{ color: "red", border: "1px solid red", marginRight: "10px" }}
        onClick={() => setactiveModal(false)}
      >Cancel</Button>
      <Button
        width="100%"
        onClick={() => setactiveModal(false)}
      >Continue scoring</Button>
    </div>
  </div >

  const totalTempDefine = <div>
    <h3>Please set the runner time</h3>
    <TimeInput onChange={(e) => {
      setpoint({ ...point, time: DateTime.fromISO('00:' + e.target.value).toMillis() })
    }} placeholder="00:00.000" inputType="time" />

    <div style={{ marginTop: "20px" }}>
      <Button
        width="100%"
        onClick={() => setactiveModal(false)}
      >Save Time</Button>
      <Button
        width="100%"
        profile="ghost"
        style={{ color: "red", border: "1px solid red", marginRight: "10px", marginTop: "15px" }}
        onClick={() => setactiveModal(false)}
      >Cancel</Button>
    </div>
  </div>

  const customTempDefine = <div>
    <h3>Please set the runner's penalty time</h3>
    <TimeInput placeholder="00:00:00" inputType="time" />

    <div style={{ marginTop: "20px" }}>
      <Button
        width="100%"
        onClick={() => setactiveModal(false)}
      >Save Time</Button>
      <Button
        width="100%"
        profile="ghost"
        style={{ color: "red", border: "1px solid red", marginRight: "10px", marginTop: "15px" }}
        onClick={() => setactiveModal(false)}
      >Cancel</Button>
    </div>
  </div>

  return (
    <>
      {activeModal ?
        <Modal
          content={activeModal}
          onBackGroundClick={() => setactiveModal(false)}
        />
        :
        null}
      <SideBarDiv>
        <Sidebar SeleKey={3} />
      </SideBarDiv>

      <Center>
        <Card>
          <Grid>
            <Row>

              <Col xs={12}>
                <Box>
                  Trial Info
              </Box>
              </Col>

              <Col xs={12}>
                <Box isTopSpaced>
                  Rider Info
              </Box>
              </Col>

              <TimeDiv>
                <Col xs={6}>
                  <Box
                    noPadding
                    onClick={() => setactiveModal(totalTempDefine)}
                    style={{ cursor: "pointer", textAlign: "center", padding: "5px" }}>
                    <h2>Total Time</h2>
                    <h1>00:00:00</h1>
                  </Box>
                </Col>

                <Col xs={6}>
                  <Box
                    noPadding
                    onClick={() => setactiveModal(customTempDefine)}
                    style={{ textAlign: "center", padding: "5px", border: "none", }}>
                    <h2>Penalty Time</h2>
                    <h1>00:00:00</h1>
                  </Box>
                </Col>
              </TimeDiv>


              <Col xs={12}>
                <Box isTopSpaced noPadding centerLabel label="Penalty">

                  {penaltiesConf.map((p, i) => {
                    return penalty(p)
                  })}
                </Box>
              </Col>

              <Col xs={12} style={{ justifyContent: "space-between", margin: "20px 0 20px 0", textAlign: "center" }}>
                <p>Changes should only be saved at the end of the route. All penalties must be confirmed by more than one judge.</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Button onClick={() => setactiveModal(cancel)} profile="ghost" style={{ color: "red", border: "1px solid red" }}>Cancelar</Button>
                  <Button onClick={handleSubmit}>Salvar</Button>
                </div>
              </Col>
            </Row>
          </Grid>
        </Card>
      </Center>
    </>
  );
}
