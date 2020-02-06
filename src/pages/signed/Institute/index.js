import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/navbar/sidebar";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";
import { Card, Descriptions, Spin, List, Col, Row, Button } from "antd";

import { Link, Redirect } from "react-router-dom";

export default function Events(props) {
  const [cookies] = useCookies("jwt");
  const [collapsed, setCollapsed] = useState(true);

  const [userInstitute, setUserInstitute] = useState();
  const [instituteEventsList, setInstituteEventsList] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get(`/showinstitute`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setUserInstitute(r.data);
        getInstituteEventsLists();
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const getInstituteEventsLists = () => {
    base
      .get(`/managedEventsList`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setInstituteEventsList(r.data);
        setLoading(false);
      })
      .catch(er => {
        console.log(er);
        setLoading(false);
      });
  };

  return (
    <div style={{ height: "100%" }}>
      <Sidebar
        isCollapsed={setCollapsed} // isCollapsed retorna o estado atual da barra, true significa agrupado/fechado
        collapsed={collapsed} // collapsed recebe o valor que deseja, outro botao pode alterar a barra se quiser
        //manualCollapse // manualCollapse vai sumir com o botão se você quiser
        SeleKey={""}
      />
      <div
        className={
          "container justify-content-center align-items-center d-flex h-100"
        }
      >
        {loading ? (
          <Spin size="large" />
        ) : userInstitute ? (
          <Row>
            <Col span={8}>
              <Card
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    height="150px"
                  />
                }
                style={{
                  margin: "0 20px 20px 0"
                }}
              >
                <Descriptions title={userInstitute.name}>
                  <Descriptions.Item label="Country">
                    {userInstitute.fed_tax_ido}
                  </Descriptions.Item>
                  <Descriptions.Item label="State">
                    {userInstitute.subd_tax_ido}
                  </Descriptions.Item>
                  <Descriptions.Item label="City">
                    {userInstitute.city_tax_ido}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
            <Col span={16}>
              <Card title="Events List">
                {instituteEventsList ? (
                  <List
                    size="large"
                    bordered
                    dataSource={instituteEventsList}
                    renderItem={item => (
                      <List.Item>
                        {item.event_name + " - " + item.date_begin}
                      </List.Item>
                    )}
                  />
                ) : null}

                <Button
                  type="link"
                  //   onClick={() => window.location.replace("/createevent")}
                  onClick={() => props.history.push("/createEvent")}
                >
                  Create Event
                </Button>
              </Card>
            </Col>
          </Row>
        ) : (
          <Card>You need to register an institute</Card>
        )}
      </div>
    </div>
  );
}
