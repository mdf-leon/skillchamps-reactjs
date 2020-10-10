import React, { useState } from 'react';
// import { Button } from 'components';
// import { Redirect } from 'react-router-dom'
import { TextField, Checkbox, Button } from '@material-ui/core';
import { Center, Card, Row } from './styles';

import { base } from '../../../config/api';

export default function Login(props) {
  const [fData, setFData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    base
      .post('/authenticate', fData)
      .then((r) => {
        console.log(r);
        localStorage.setItem('token', r.data.token);
        // setCookie("jwt", r.data.token);
        window.location.reload();
      })
      .catch((e) => {
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
            textAlign: 'center',
            fontSize: '20px',
            // fontWeight: "500"
          }}
        >
          Login
        </div>
        <div style={{ textAlign: 'center', margin: '5px 0 20px 0' }}>
          Dont have an account? <a href="/register">Register</a>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div style={{ marginBottom: '10px' }}>
            <TextField
              label="E-mail"
              onChange={(e) => setFData({ ...fData, email: e.target.value })}
              // placeholder="Email"
              variant="outlined"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              label="Password"
              onChange={(e) => setFData({ ...fData, password: e.target.value })}
              // inputType="password"
              variant="outlined"
              // placeholder="Password"
            />
          </div>
          <Row style={{ marginBottom: '15px' }}>
            <p><Checkbox />I agree to the user's agreement of service</p>
            <span className="mx-2" />
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Row>
          <Button variant="contained" color="primary" type="submit">
            Log in
          </Button>
        </form>
      </Card>
    </Center>
  );
}
