import React, { useState } from "react";
import Sidebar from "../../../components/navbar/sidebar";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  List,
  Select,
  Avatar,
  Collapse,
  Icon,
  Modal,
  Spin,
  Form,
  DatePicker
} from "antd";
import moment from "moment";

export default function CreateEvent() {
  const [cookies, setCookie] = useCookies("jwt");

  const [userInputs, setUserInputs] = useState({
    event_name: "",
    date_begin: ""
  });

  const [loading, setLoading] = useState(false);
  const [switcher, setSwitcher] = useState(0);

  const Create = e => {
    e.preventDefault();
    base
      .post(`/createEvent`, userInputs, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setUserInputs({
          event_name: "",
          date_begin: ""
        });
        console.log(r.data);
        setLoading(false);
        setSwitcher(1);
      })
      .catch(e => {
        console.log(e);
        setSwitcher(2);
        setLoading(false);
      });
    setLoading(true);
  };

  return (
    <div className="h-100">
      <Sidebar SeleKey={1} />
      <div className="container justify-content-center align-items-center d-flex h-100">
        <Card style={{ width: "300px" }}>
          {switcher === 0 ? (
            <Form onSubmit={e => Create(e)}>
              <p>Title</p>
              <Form.Item>
                <Input
                  placeholder="event name"
                  onChange={e =>
                    setUserInputs({
                      ...userInputs,
                      event_name: e.target.value
                    })
                  }
                  value={userInputs.event_name}
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  onChange={e => {
                    setUserInputs({
                      ...userInputs,
                      date_begin: e ? e.format("YYYY-MM-DD") : null
                    });
                    console.log(e); // true ? "verdi" : null
                  }}
                  value={
                    userInputs.date_begin
                      ? moment(userInputs.date_begin, "YYYY-MM-DD")
                      : undefined
                  }
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form>
          ) : switcher === 1 ? (
            <div style={{ textAlign: "center" }}>
              <Icon
                type="check-circle"
                style={{ fontSize: "50px", color: "#096dd9", display: "block" }}
              />
              <span
                style={{
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "5px"
                }}
              >
                Success!
              </span>
              <Button type="primary" onClick={() => setSwitcher(0)}>
                Create another event
              </Button>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <Icon
                type="close"
                style={{ fontSize: "50px", color: "tomato", display: "block" }}
              />
              <span
                style={{
                  display: "block",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "5px"
                }}
              >
                Error!
              </span>
              <Button type="primary" onClick={() => setSwitcher(0)}>
                Try again
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
