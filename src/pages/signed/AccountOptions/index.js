import React, { useState, useEffect } from "react";
import { Button, TextInput, Modal } from 'components';
import { Row, Col } from 'styles/grid'
import Sidebar from "../../../components/navbar/sidebar";
import { Link } from "react-router-dom";
import { base } from "../../../config/api";
import { useCookies } from "react-cookie";

import {
  Card,
  Avatar,
  Icon,
  Spin,
} from "antd";

import UserEvents from "./userEvents";
import BecomeInstitute from "./becomeInstitute";

export default function AccountOptions(props) {

  useEffect(() => {
    base
      .get(`/showuser` )
      .then(r => {
        setUser(r.data);
        getUserIntitute();
        base
          .get(`/showrider` )
          .then(r => {
            getUserEvents(1);
            setUserRider(r.data);
          })
          .catch(e => {
          });
      })
      .catch(e => {
        console.log(e.response);
      });
  }, []);

  const [userListEvents, setUserListEvents] = useState({ data: [] });

  const [userInstitute, setUserInstitute] = useState();

  const [user, setUser] = useState({
    name: ""
  });

  const [userRider, setUserRider] = useState();
  const [switcher, setSwitcher] = useState(false);

  const getUserEvents = page => {
    base
      .get(`/eventsSigned?page=${page}&limit=10`)
      .then(r => {
        setUserListEvents(r.data);
      })
      .catch(e => {
      });
  };

  const getUserIntitute = () => {
    base
      .get(`/showinstitute`)
      .then(r => {
        setUserInstitute(r.data);
      })
      .catch(e => {
      });
  };

  // const userInstitute = "";
  const userDetails = (
    <>
      <Card
        size="small"
        title="User Information"
        style={{
          margin: "0 20px 20px 0"
        }}
        extra={<a href="#">Edit</a>}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "flex-start"
          }}
        >
          <Col span={10}>
            <Avatar
              size={110}
              icon="user"
              src="https://featuredcreature.com/wp-content/uploads/2012/10/Screen%2Bshot%2B2011-01-23%2Bat%2B10.54.57%2BAM2.png"
            />
          </Col>
          <Col span={14}>
            <Row
              style={{
                lineHeight: "30px",
                fontSize: "20px",
                fontWeight: 500,
                marginTop: 14
              }}
            >
              <div>{user.name}</div>
            </Row>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                lineHeight: "25px"
              }}
            >
              <div>{user.email}</div>
            </Row>
            <Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                lineHeight: "25px"
              }}
            >
              <div>5519981913338</div>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card
        title="User Rider"
        size="small"
        style={{
          margin: "0 20px 20px 0"
        }}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px"
          }}
        >
          {userRider ? (
            <>
              <Card
                style={{ width: "100%" }}
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Card.Meta
                  avatar={
                    <Avatar src="https://i.pinimg.com/originals/01/dc/20/01dc20ca382fb226e9df8591b3da95e9.jpg" />
                  }
                  title={userRider.name}
                  description={
                    userRider.motorcycle + " - " + userRider.motorcycle_plate
                  }
                />
              </Card>
            </>
          ) : (
            <span>
              No rider found...
              <Button type="link" onClick={() => props.history.push("/rider")}>
                register a rider
              </Button>
            </span>
          )}
        </Row>
      </Card>
    </>
  );

  return (
    <div style={{ height: "100%" }}>
      <Sidebar SeleKey={3} />
      <div
        className="container justify-content-center align-items-center d-flex h-100"
        style={{ flexDirection: "column" }}
      >
          <>
            <div
              style={{ display: "flex", width: "100%", padding: "26px 26px 0" }}
            >
              <span
                style={{ width: "195px", fontSize: "20px", fontWeight: 500 }}
              >
                Account Options
              </span>
              <div
                style={{
                  borderBottom: "1px solid #e8e8e8",
                  width: "100%",
                  marginBottom: "10px"
                }}
              ></div>
            </div>
            <Card bordered={false} style={{ width: "100%" }}>
              <Row>
                <Col sm={4}>
                  {userDetails}
                  {userInstitute ? (
                    <Button
                      type="link"
                      onClick={() => props.history.push("/manageInstitute")}
                    >
                      Manage your Institute
                    </Button>
                  ) : (
                    <a style={{color: "#1890ff"}} onClick={() => setSwitcher(true)}>
                      Register your Institute
                    </a>
                  )}
                </Col>
                <Col sm={8}>
                  {!switcher ? (
                    <UserEvents
                      userListEvents={userListEvents}
                      getUserEvents={getUserEvents}
                      {...props} // passa o props do pai para o filho
                    />
                  ) : (
                    <BecomeInstitute setSwitcher={setSwitcher} />
                  )}
                </Col>
              </Row>
            </Card>
          </>
      </div>
    </div>
  );
}
