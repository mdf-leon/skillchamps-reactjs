import React, { useState } from "react";
import { Button, Input, CheckBox } from 'components/shared';
// import { Redirect } from 'react-router-dom'

import { Center, Card, Row } from './styles'

import { base } from "../../../config/api";

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
        <form onSubmit={handleSubmit} className="login-form">
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
              inputType="password"
              placeholder="Password"
            />
          </div>
          <Row style={{ marginBottom: "15px" }}>
            <CheckBox content="Remember me" onCheckChange={(e)=>{console.log(e.target.checked)}}/>
            <span className="mx-2" />
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Row>
          <Button
            width="100%"
            loading={loading}
            block
            type="primary"
            htmlType="submit"
          >
            Log in
              </Button>
        </form>
      </Card>
    </Center>
  );
}
