import React, { useState, useEffect } from "react";
import { Button, Row, Card, Input, Form, Checkbox, Icon } from "antd";
// import { Redirect } from 'react-router-dom'

import { base } from "../../../config/api";
import { useCookies } from "react-cookie";

export default function Register(props) {
  // hook = function

  const [cookies, setCookie] = useCookies();

  const [success, setSuccess] = useState(0);

  const [fData, setFData] = useState({
    name: "",
    email: "",
    password: "",
    r_password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    base
      .post("/register", fData)
      .then(r => {
        setSuccess(true);
        setCookie("jwt", r.data.token);
        console.log(r);
      })
      .catch(e => {
        setSuccess(e.response);
        console.log(e.response);
      });
  };

  useEffect(() => {
    if (success === true) {
      setTimeout(() => window.location.reload(), 3000);
    }
  }, [success]);

  return (
    // <Redirect to="/dashboard" />
    <div className="container justify-content-center align-items-center d-flex h-100">
      <Card style={{ width: "300px" }}>
        {success === 0 ? (
          <>
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "500"
              }}
            >
              Register
            </div>
            <div style={{ textAlign: "center", margin: "5px 0 20px 0" }}>
              Already a member? <a href="/login">Log In</a>
            </div>
            <Form onSubmit={handleSubmit} className="login-form">
              <Form.Item style={{ marginBottom: "10px" }}>
                <Input
                  onChange={e => setFData({ ...fData, name: e.target.value })}
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: "10px" }}>
                <Input
                  onChange={e => setFData({ ...fData, email: e.target.value })}
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: "10px" }}>
                <Input
                  onChange={e =>
                    setFData({ ...fData, password: e.target.value })
                  }
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item style={{ marginBottom: "10px" }}>
                <Input
                  onChange={e =>
                    setFData({ ...fData, r_password: e.target.value })
                  }
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>
              <Form.Item>
                <Row>
                  <Button
                    loading={loading}
                    block
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Register
                  </Button>
                </Row>
              </Form.Item>
            </Form>
          </>
        ) : success === true ? (
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
            <span style={{ display: "block" }}>
              You are now logged in and will be redirected
            </span>
            <Icon type="loading" />
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Icon
              type="warning"
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
              Error!
            </span>
            <span style={{ display: "block" }}>Failed</span>
          </div>
        )}
      </Card>
    </div>
  );
}
