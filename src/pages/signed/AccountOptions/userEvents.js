import React, { useState, useEffect } from "react";
import { Button, TextInput, Modal, Box } from 'components';
import { Card } from './styles'
import { Row, Col } from 'styles/grid'
import {
  Descriptions,
  List,
  Avatar,
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
            pagination={{
              onChange: page => {
                props.getUserEvents(page);
              },
              pageSize: props.userListEvents.perPage,
              total: props.userListEvents.total,
              current: props.userListEvents.page
            }}
            style={{ marginTop: "20px" }}
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
                  <Col sm={3}>
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
                  <Col sm={8}>
                    <span style={{ lineHeight: "40px" }}>
                      {item.event_name}
                    </span>
                  </Col>
                  <Col sm={8}>
                    <span style={{ lineHeight: "40px" }}>City - Sp</span>
                  </Col>
                  <Col sm={5}></Col>
                </Row>
              </List.Item>
            )}
          />
        </Card>
      ) : (
        <Box style={{width: "100%"}} label="Subscribed Events">
            You are not subscribed to any event...&nbsp;
            <a style={{color: "#1890ff"}} onClick={() => props.history.push("/events")}>
              find events
            </a>
        </Box>
      )}
    </>
  );
}
