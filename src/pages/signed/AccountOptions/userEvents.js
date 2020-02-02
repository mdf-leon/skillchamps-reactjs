import React, { useState, useEffect } from "react";
import {
  Card,
  Descriptions,
  List,
  Row,
  Col,
  Avatar,
  Button,
  Select,
  Input
} from "antd";

export default function UserEvents(props) {
  return (
    <>
      {props.userListEvents.data.length ? (
        <Card size="small" title={"Subscribed Events"}>
          <List
            size="small"
            bordered
            dataSource={props.userListEvents.data}
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
                  <Col span={5}></Col>
                </Row>
              </List.Item>
            )}
          />
        </Card>
      ) : (
        <Card size="small" title={"Subscribed Events"}>
          <Card>
            You are not subscribed to any event...{" "}
            <a href="/events">find events</a>
          </Card>
        </Card>
      )}
    </>
  );
}
