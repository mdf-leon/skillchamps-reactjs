import React, { useState, useEffect } from "react";
// styles //
import { Box, Select, Table } from 'components';
import { Row, Center } from 'styles/global'
import { Col, Grid } from 'styles/grid'
// sidebar //
import Sidebar from "../../../components/navbar/sidebar";
// api //
import { base } from "../../../config/api";


export default function Dashboard(props) {
  const [trials, setTrials] = useState([])
  const [eventList, seteventList] = useState([]);

  useEffect(() => {
    let params = { "event_id": localStorage.getItem('event_selected') }
    base.get(`/managedTrialsList`, { params })
      .then((r) => {
        setTrials(r.data)
      }).catch((er) => { })
    base.get(`/eventsSigned`, { params })
      .then(({ data }) => seteventList(data)).catch((er) => { console.log(er) });
  }, [])

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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px', paddingBottom: '2px', borderBottom: '1px solid #D8E2E7' }}>
              <h1 style={{ margin: 0 }}>RESULTS & STATISTICS</h1>
              <a href="/AccountOptions">Select Events</a>
            </div>
            {eventList
              ?
              <Box>
                <p>{eventList.id}. {eventList.event_name}</p>
                <p>{eventList.date_begin}</p>
              </Box>
              :
              null
            }

            <Row style={{ marginTop: '10px' }}>
              <Col xs>
                <Select placeholder="Category">
                  <option>ea</option>
                  <option>AMISTERDAN</option>
                  <option>Octo Britsh</option>
                </Select>
              </Col>

              <Col xs>
                <Select placeholder="Trial">
                  {trials.map((content) => (
                    <option>{content.name}</option>
                  ))}
                </Select>
              </Col>
            </Row>
            <Table isTopSpaced columns={columns} data={data} />
          </Box>
        </Grid>
      </Center>
    </>

  );
}
