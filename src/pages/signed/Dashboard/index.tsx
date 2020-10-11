import React, { useState, useEffect } from "react";
// styles //
import { Box, Select, Table } from "components";
import { Row, Center } from "styles/global";
import { Col, Grid } from "styles/grid";
// sidebar //
import Sidebar from "../../../components/Sidebar";
// api //
import { base } from "../../../config/api";

export default function Dashboard(props) {
  const [trials, setTrials] = useState<any[]>([]);
  const [eventList, seteventList] = useState<any[]>([]);

  useEffect(() => {
    // console.log(trials[0])
    let params = { event_id: localStorage.getItem("event_selected") };
    base
      .get(`/managedTrialsList`, { params })
      .then((r) => {
        console.log(r.data);
        setTrials(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
    base
      .get(`/eventsSigned`, { params })
      .then(({ data }) => seteventList(data))
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const columns = [
    {
      title: "Pos",
      dataIndex: "position",
      render: (_: any, record) => <span>{record.position}</span>,
    },
    {
      title: "Rider",
      dataIndex: "name",
      render: (_: any, record) => <span>{record.name}</span>,
    },
    {
      title: "Bike",
      dataIndex: "bike",
      render: (_: any, record) => <span>{record.bike}</span>,
    },
    {
      title: "Pontos",
      dataIndex: "pontos",
      render: (_: any, record) => <span>{record.pontos}</span>,
    },
  ];

  const [data] = useState([
    { position: "1", name: "carlos", bike: "harley", pontos: "26" },
    { position: "1", name: "carlos", bike: "harley", pontos: "26" },
    { position: "1", name: "carlos", bike: "harley", pontos: "26" },
  ]);

  return (
    <>
      <Sidebar topnav title="SkillChamps" rightIcon="gear" />
      <Center>
        <Grid>
          <Box>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "10px",
                paddingBottom: "2px",
                borderBottom: "1px solid #D8E2E7",
              }}
            >
              <h1 style={{ margin: 0 }}>RESULTS & STATISTICS</h1>
              <a href="/AccountOptions">Select Events</a>
            </div>

            <Row style={{ marginTop: "10px" }}>
              <Col xs>
                <Select placeholder="Category">
                  <option>ea</option>
                  <option>AMSTERDAM</option>
                  <option>objectOf British</option>
                </Select>
              </Col>

              <Col xs>
                <Select placeholder="Trial">
                  {trials[0]
                    ? trials.map((content) => <option>{content.name}</option>)
                    : null}
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
