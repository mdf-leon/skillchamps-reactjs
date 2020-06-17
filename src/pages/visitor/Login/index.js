import React, { useState } from "react";
import { Button, Input } from 'components/shared';
import { Checkbox, Icon } from "antd";
// import { Redirect } from 'react-router-dom'

import { Center, Card, Row, } from './styles'

import { base } from "../../../config/api";
import { useCookies } from "react-cookie";

export default function Login(props) {

  const [fData, setFData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    base
      .post("/authenticate", fData)
      .then(r => {
        console.log(r);
        localStorage.setItem('token', r.data.token)
        // setCookie("jwt", r.data.token);
        //window.location.reload()
      })
      .catch(e => {
        setLoading(false);
        console.log(e.response);
      });
  };

  // return = view (parte visual)
  return (
    // <Redirect to="/dashboard" />
    <Center>
      <Card>
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "500"
          }}
        >
          Login
        </div>
        <div style={{ textAlign: "center", margin: "5px 0 20px 0" }}>
          Dont have an account? <a href="/register">Register</a>
        </div>
        <form onSubmit={handleSubmit}  className="login-form">
          <div style={{ marginBottom: "10px" }}>
            <Input
              label="E-mail"
              onChange={e => setFData({ ...fData, email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <Input
              label="Password"
              onChange={e => setFData({ ...fData, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <Checkbox>Remember me</Checkbox>
            <span className="mx-2" />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <div style={{ marginTop: "15px" }}>
              <Button
                width="100%"
                loading={loading}
                block
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </Center>
  );
}
