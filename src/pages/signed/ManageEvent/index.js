import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/navbar/sidebar";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";
import queryString from "query-string";
import { Card, Row, Col, Descriptions, Spin, Button, Icon, List } from "antd";

export default function ManageEvent(props) {
  const [cookies, setCookie] = useCookies("jwt");

  useEffect(() => {
    base
      .get(`/showevent`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        let id = queryString.parse(props.location.search).id;
        setEvent(r.data.filter(e => e.id == id)[0]);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
      });
  }, []);

  const getTrialsList = () => {
    base
      .get(`/managedtrialsList`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {})
      .catch(e => {});
  };

  const handleSwitch = id => {
    setSwitcher(id);
  };

  const [switcher, setSwitcher] = useState("0");

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState();

  const [trial, setTrial] = useState({
    trial: "",
    rider: ""
  });

  const riderList = [
    { name: "João", age: 16 },
    { name: "Roberto", age: 11 },
    { name: "Felipe", age: 14 },
    { name: "Marcos", age: 15 }
  ];

  const trialList = [
    { name: "Volta Completa" },
    { name: "Corrida" },
    { name: "Slow Ride" },
    { name: "Pular com a moto" }
  ];

  return (
    <div className="h-100">
      <Sidebar SeleKey={2} />
      <div
        className="container justify-content-center align-items-center d-flex h-100"
        style={{ flexDirection: "column" }}
      >
        {!loading && event ? (
          <>
            <Row style={{ width: "60%" }}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://www.communicatejesus.com/wp-content/uploads/2017/09/kcc_webBanner_954x536_events_NG18.jpeg"
                    height="150px"
                  />
                }
                style={{
                  margin: "0 0 20px 0"
                }}
              >
                <Descriptions title={event.event_name}>
                  <Descriptions.Item label="Date">
                    {event.date_begin}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
              <Card>
                <Card size="small" title="APlicar Prova">
                  <Row style={{ padding: "10px 50px" }}>
                    {switcher == "1" ? (
                      <List
                        dataSource={riderList}
                        renderItem={item => (
                          <List.Item
                            onClick={() => {
                              setSwitcher("0");
                              setTrial({ ...trial, rider: item.name });
                            }}
                          >
                            {item.name}
                          </List.Item>
                        )}
                      ></List>
                    ) : switcher == "2" ? (
                      <List
                        dataSource={trialList}
                        renderItem={item => (
                          <List.Item
                            onClick={() => {
                              setSwitcher("0");
                              setTrial({ ...trial, trial: item.name });
                            }}
                          >
                            {item.name}
                          </List.Item>
                        )}
                      ></List>
                    ) : (
                      <>
                        <Col span={9}>
                          <Card
                            name="riderSelect"
                            onClick={() => handleSwitch("1")}
                            style={{
                              height: "200px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer"
                            }}
                          >
                            {trial.rider ? (
                              <Card>{trial.rider}</Card>
                            ) : (
                              <>
                                <Icon
                                  type="user-add"
                                  style={{ fontSize: "60px", color: "#d2d2d2" }}
                                />
                                <p>Select Rider</p>
                              </>
                            )}
                          </Card>
                        </Col>
                        <Col span={6}>
                          <div
                            style={{
                              height: "200px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "40px"
                            }}
                          >
                            <Icon type="double-right" />
                          </div>
                        </Col>
                        <Col span={9}>
                          <Card
                            name="trialSelect"
                            onClick={() => handleSwitch("2")}
                            style={{
                              height: "200px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer"
                            }}
                          >
                            {trial.trial ? (
                              <Card>{trial.trial}</Card>
                            ) : (
                              <>
                                <Icon
                                  type="hourglass"
                                  style={{ fontSize: "60px", color: "#d2d2d2" }}
                                />
                                <p>Select Trial</p>
                              </>
                            )}
                          </Card>
                        </Col>
                      </>
                    )}
                  </Row>
                  <Row style={{ padding: "10px 50px" }}>
                    <Button
                      type="primary"
                      style={{ width: "100%", height: "60px" }}
                    >
                      Aplicar
                    </Button>
                  </Row>
                </Card>
              </Card>
            </Row>
          </>
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
}
