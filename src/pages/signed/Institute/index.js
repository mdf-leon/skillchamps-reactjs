import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/navbar/sidebar";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";
import { Card, Descriptions, Spin, List, Col, Row, Button, Icon } from "antd";

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

  const getInstituteEventsLists = page => {
    base
      .get(`/managedEventsList?page=${page}&limit=10`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setInstituteEventsList(r.data);
        console.log(r);
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
          <Row
            style={{
              width: "60%"
            }}
          >
            <Card
              bordered={false}
              cover={
                <img
                  alt="example"
                  src="https://kjzz.org/sites/default/files/field/image/banner-alzheimers-institute-20190322.jpg"
                  height="150px"
                />
              }
              style={{
                margin: "0 0 20px 0"
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
            <Card bordered={false} title="Your Events">
              {instituteEventsList ? (
                <List
                  size="large"
                  bordered={false}
                  dataSource={instituteEventsList}
                  renderItem={item => (
                    <List.Item>
                      <div
                        onClick={() =>
                          props.history.push(`/manageEvent?id=${item.id}`)
                        }
                        style={{
                          display: "flex",
                          border: "1px solid #e8e8e8",
                          borderRadius: "4px",
                          overflow: "hidden",
                          width: "100%",
                          cursor: "pointer"
                        }}
                      >
                        <div
                          style={{
                            width: "20%",
                            backgroundImage:
                              "url(https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        ></div>
                        <div
                          style={{
                            display: "flex",
                            width: "60%",
                            height: "60px",
                            padding: "5px 20px",
                            flexDirection: "column"
                          }}
                        >
                          <div
                            style={{
                              marginBottom: 0,
                              marginBottom: "0px",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              fontWeight: 700
                            }}
                          >
                            {item.event_name}
                          </div>
                          <div style={{ fontSize: "11px" }}>
                            {item.date_begin}
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            float: "right",
                            width: "70px",
                            alignItems: "center",
                            background: "#f1f1f1",
                            justifyContent: "center",

                            marginLeft: "auto"
                          }}
                        >
                          <Icon
                            type="setting"
                            style={{ fontSize: "16px", color: "#8e8e8e" }}
                          />
                        </div>
                      </div>
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
          </Row>
        ) : (
          <Card>You need to register an institute</Card>
        )}
      </div>
    </div>
  );
}
