import React, { useState } from "react";
import { Button, TextInput, CheckBox, Box } from 'components';
// import { Redirect } from 'react-router-dom'
import { Row, Col, Grid } from 'styles/grid'

import { Center, Card } from 'styles/global'

import { SideBarDiv, ChangeButton } from './styles'

import { base } from "../../../config/api";
import Sidebar from "../../../components/navbar/sidebar";

export default function BeforePoints(props) {

  const [isSelected, setIsSelected] = useState(true)
  const [isSelected2, setIsSelected2] = useState(false)

  const riders = [
    { rider: "carlos", },
    { rider: "carlos", },
    { rider: "carlos", },
    { rider: "carlos", },
    { rider: "carlos", },
  ]

  const trials = [
    { trial: "7b526", },
    { trial: "7b526", },
    { trial: "7b526", },
    { trial: "7b526", },
    { trial: "7b526", },
    { trial: "7b526", },
  ]

  const handleChangeButton = e => {
    setIsSelected(!isSelected)
    setIsSelected2(!isSelected2)

  };

  return (
    <>
      <SideBarDiv>
        <Sidebar SeleKey={3} />
      </SideBarDiv>

      <Center>
        <Card>
          <Grid>
            <Row>
              <Col xs={12}>
                <Box>
                  <h2 style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8" }}>
                    Trail
                  </h2>

                  <p>Name: Guilhermo del Touro</p>
                  <p>Category: Ifernals Bikes Rider</p>
                  <p>Bike: GT5755</p>
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
                <Box>
                  {
                    isSelected === true
                      ?
                      trials.map((content) => (
                        <div>{content.trial}</div>
                      ))
                      :
                      riders.map((content) => (
                        <div>{content.rider}</div>
                      ))
                  }
                </Box>
              </Col>

            </Row>
          </Grid>

        </Card>
      </Center>
    </>
  );
}
