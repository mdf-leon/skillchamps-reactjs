import React, { useState } from "react";

import { Button, Box, Select, Table } from 'components';
import { Center } from 'styles/global'
import { Row, Col, Grid } from 'styles/grid'

import Sidebar from "../../../components/navbar/sidebar";


export default function Dashboard(props) {

  const columns = [
    {
      title: "Pos",
      dataIndex: 'position',
      render: (_, record) => <span>{record.position}</span>,
    },
    {
      title: "Rider",
      dataIndex: 'name',
      render: (_, record) => <span>{record.name}</span>,
    },
    {
      title: "Bike",
      dataIndex: 'bike',
      render: (_, record) => <span>{record.bike}</span>,
    },
    {
      title: "Pontos",
      dataIndex: 'pontos',
      render: (_, record) => <span>{record.pontos}</span>,
    },
  ]

  const [data] = useState([
    { position: '1', name: 'carlos', bike: 'harley', pontos: '26', },
    { position: '1', name: 'carlos', bike: 'harley', pontos: '26', },
    { position: '1', name: 'carlos', bike: 'harley', pontos: '26', },
  ])

  return (
    <>
      <Sidebar SeleKey={3} />
      <Center>
        <Grid>
          <Box>
            <h1>RESULTS & STATISTICS</h1>
            <Row>
              <Col xs>
                <Select>
                  <option>ea</option>
                  <option>AMISTERDAN</option>
                  <option>Octo Britsh</option>
                </Select>
              </Col>

              <Col xs>
                <Select>
                  <option>GT</option>
                  <option>A4781</option>
                  <option>Britsh</option>
                </Select>
              </Col>
            </Row>
            <Table columns={columns} data={data} />
          </Box>
        </Grid>
      </Center>
    </>

  );
}
