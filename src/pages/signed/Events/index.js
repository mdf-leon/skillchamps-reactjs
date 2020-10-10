import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  List,
  Select,
  Avatar,
  Modal,
  Spin
} from "antd";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";


export default function Events(props) {
  const [cookies, setCookie] = useCookies("jwt");

  const [inputColumn, setInputColumn] = useState("event_name");
  const [inputValue, setInputValue] = useState("");

  const [page, setPage] = useState(1);
  const [userRider, setUserRider] = useState();
  const [userEvents, setUserEvents] = useState({ data: [] });

  const [modalInfo, setModalInfo] = useState({ enabled: false, data: [] });

  const [eventsList, setEventsList] = useState({
    total: 0,
    perPage: 20,
    page: 1,
    lastPage: 0,
    data: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base
      .get(`/showrider`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setUserRider(r.data);
        getEventsSigned();
        getList(1);
      })
      .catch(e => {
        setLoading(false);
      });
  }, []);

  const getEventsSigned = () => {
    base
      .get(`/eventsSigned`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setUserEvents(r.data);
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  const getList = page => {
    base
      .get(
        `/eventslist?column=${inputColumn}&value=${inputValue}&page=${page}&limit=10`,
        {
          headers: { Authorization: `Bearer ${cookies.jwt}` }
        }
      )
      .then(r => {
        setEventsList(r.data);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
      });
  };

  const signToEvent = id => {
    base
      .post(
        `/signToEvent`,
        { rider_id: userRider.id, event_id: id },
        {
          headers: { Authorization: `Bearer ${cookies.jwt}` }
        }
      )
      .then(r => {
        getEventsSigned();
        getList(page);
        setModalInfo({ enabled: false, data: [] });
      })
      .catch(e => {
        console.log(e.response);
      });
  };

  const handleModal = item => {
    setModalInfo({ enabled: true, data: item });
  };

  const handleColumn = e => {
    setInputColumn(e);
  };

  const handleValue = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="h-100">
      <div className="container justify-content-center align-items-center d-flex h-100">
        {!loading ? (
          <Card style={{ width: "70%" }}>
            {userRider ? (
              <>
                <span>Here you can find events open for signup</span>
                <List
                  size="large"
                  header={
                    <>
                      <div style={{ display: "flex" }}>
                        <div style={{ width: "130px", lineHeight: "30px" }}>
                          Find Events:
                        </div>
                        <Input.Group compact style={{ display: "flex" }}>
                          <Select
                            style={{ width: "25%" }}
                            defaultValue="event_name"
                            onChange={handleColumn}
                          >
                            <Select.Option value="event_name">
                              Name
                            </Select.Option>
                            <Select.Option value="id">Id</Select.Option>
                            <Select.Option value="address">
                              Address
                            </Select.Option>
                          </Select>
                          <Input.Search
                            placeholder="search text"
                            enterButton
                            onChange={handleValue}
                            onSearch={() => {
                              getList(1);
                              setPage(1);
                            }}
                          />
                        </Input.Group>
                      </div>
                    </>
                  }
                  bordered
                  dataSource={eventsList.data}
                  renderItem={item => (
                    <List.Item>
                      <Row
                        style={{
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex"
                        }}
                      >
                        <Col span={3}>
                          <Avatar
                            shape="square"
                            icon="user"
                            src="http://www.somervillenj.org/images/imageedit_1_2654230527.jpg"
                            style={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                              float: "left"
                            }}
                          />
                        </Col>
                        <Col span={8}>
                          <span style={{ lineHeight: "40px" }}>
                            {item.event_name}
                          </span>
                        </Col>
                        <Col span={8}>
                          <span style={{ lineHeight: "40px" }}>City - Sp</span>
                        </Col>
                        <Col span={5}>
                          <Button
                            onClick={() => {
                              handleModal(item);
                            }}
                            disabled={
                              userEvents.data.find(i => i.id == item.id)
                                ? true
                                : false
                            }
                          >
                            Signup
                          </Button>
                        </Col>
                      </Row>
                    </List.Item>
                  )}
                  pagination={{
                    onChange: page => {
                      setPage(page);
                      getList(page);
                    },
                    pageSize: eventsList.perPage,
                    total: eventsList.total,
                    current: page
                  }}
                  style={{ marginTop: "20px" }}
                />
              </>
            ) : (
              <span>
                To signup on an event, first you need to
                <Button
                  type="link"
                  onClick={() => props.history.push("/rider")}
                >
                  create a rider
                </Button>
              </span>
            )}
            <Modal
              title={modalInfo.data.event_name}
              visible={modalInfo.enabled}
              onOk={() => signToEvent(modalInfo.data.id)}
              onCancel={() => setModalInfo({ enabled: false, data: [] })}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </Card>
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
}
