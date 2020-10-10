import React, { useState } from 'react';
// import { Button } from 'components';
// import { Redirect } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TextField, Checkbox, Button } from '@material-ui/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Center, Card, Row } from './styles';

import { base } from '../../../config/api';

export default function Login() {
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
              style={{ width: '100%' }}
              label="E-mail"
              onChange={(e) => setFData({ ...fData, email: e.target.value })}
              // placeholder="Email"
              variant="outlined"
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <TextField
              style={{ width: '100%' }}
              label="Password"
              onChange={(e) => setFData({ ...fData, password: e.target.value })}
              type="password"
              variant="outlined"
              // placeholder="Password"
            />
          </div>
          {/* <Row style={{ marginBottom: '15px' }}>
            <p>
              <Checkbox />I agree to the <a href="/">terms of service</a>
            </p>
            <span className="mx-2" />
          </Row> */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <a href="/"> Forgot password </a>
            <div style={{ width: '60px'}}/>
            <Button variant="contained" color="primary" type="submit">
              Log in
            </Button>
          </div>
        </form>
      </Card>
    </Center>
  );
}
