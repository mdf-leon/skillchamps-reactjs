import React, { useState, useEffect } from "react";
import { Button, Input, CheckBox } from 'components/shared';
import { Center, Card, Row } from './styles'
// import { Redirect } from 'react-router-dom'

import { base } from "../../../config/api";

export default function Register(props) {
  // hook = function

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
        console.log(r);
      })
      .catch(e => {
        setSuccess(e.response);
        console.log(e.response);
      });
  };

  useEffect(() => {
    if (success === true) {
    }
  }, [success]);

  return (
    // <Redirect to="/dashboard" />
    <Center className="container justify-content-center align-items-center d-flex h-100">
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
            <div style={{ textAlign: "center", margin: "5px 0 15px 0" }}>
              Already a member? <a href="/login">Log In</a>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
              <Row style={{ marginBottom: "10px" }}>
                <Input
                  label="Name"
                  onChange={e => setFData({ ...fData, name: e.target.value })}
                  placeholder="Name"
                />
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Input
                  label="Email"
                  onChange={e => setFData({ ...fData, email: e.target.value })}
                  placeholder="Email"
                />
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Input
                  label="Password"
                  onChange={e =>
                    setFData({ ...fData, password: e.target.value })
                  }
                  type="password"
                  placeholder="Password"
                />
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Input
                  label="Confirm Password"
                  onChange={e =>
                    setFData({ ...fData, r_password: e.target.value })
                  }
                  type="password"
                  placeholder="Confirm Password"
                />
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <CheckBox content="I agree to the Terms and Conditions" onCheckChange={(e) => { console.log(e.target.checked) }} />
              </Row>
              <Button
                width="100%"
                loading={loading}
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Register
              </Button>
            </form>
          </>
        ) : success === true ? (
          <div style={{ textAlign: "center" }}>
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
          </div>
        ) : (
              <div style={{ textAlign: "center" }}>
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
    </Center>
  );
}
