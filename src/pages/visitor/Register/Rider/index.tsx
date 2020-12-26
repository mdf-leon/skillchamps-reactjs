import React, { useState } from 'react';
import VisitorTopBar from 'components/VisitorTopBar';
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  makeStyles,
} from '@material-ui/core';
import { base } from 'config/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props: any) {
  const classes = useStyles();
  const [registerInfo, setRegisterInfo] = useState<any>({
    email: '',
    password: '',
    r_password: '',
  });
  const [riderInfo, setriderInfo] = useState<any>({
    name: '',
    category: '',
    date_of_birth: '',
    motorcycle: '',
    motorcycle_plate: '',
    license_ido: '',
    fed_tax_ido: '',
    subd_tax_ido: '',
    city_tax_ido: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    base
      .post(`/register`, registerInfo)
      .then(() => {
        const fData = {
          email: registerInfo.email,
          password: registerInfo.password,
        };
        base
          .post('/authenticate', fData)
          .then((r) => {
            console.log(r);
            localStorage.setItem('token', r.data.token);
            base
              .post('/makeRider', riderInfo, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              })
              .then((r) => {
                console.log(r);
                window.location.reload();
              })
              .catch((e) => {
                console.log(e.response);
              });
          })
          .catch((e) => {
            console.log(e.response);
          });
      })
      .catch((err) => console.log(err.response.message));
  };

  const riderForm = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              name: e.target.value,
            })
          }
          autoComplete="fullname"
          name="fullname"
          variant="outlined"
          required
          fullWidth
          id="fullname"
          label="Full Name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              category: e.target.value,
            })
          }
          autoComplete="category"
          name="category"
          variant="outlined"
          required
          fullWidth
          id="category"
          label="Category"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              date_of_birth: e.target.value,
            })
          }
          autoComplete="date_of_birth"
          name="date_of_birth"
          variant="outlined"
          required
          fullWidth
          id="date_of_birth"
          label="Date of birth"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              motorcycle: e.target.value,
            })
          }
          autoComplete="motorcycle"
          name="motorcycle"
          variant="outlined"
          required
          fullWidth
          id="motorcycle"
          label="Motorcycle"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              motorcycle_plate: e.target.value,
            })
          }
          autoComplete="motorcycle_plate"
          name="motorcycle_plate"
          variant="outlined"
          required
          fullWidth
          id="motorcycle_plate"
          label="Motorcycle Plate"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              license_ido: e.target.value,
            })
          }
          autoComplete="license_ido"
          name="license_ido"
          variant="outlined"
          required
          fullWidth
          id="license_ido"
          label="License number"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              fed_tax_ido: e.target.value,
            })
          }
          autoComplete="fed_tax_ido"
          name="fed_tax_ido"
          variant="outlined"
          required
          fullWidth
          id="fed_tax_ido"
          label="Country"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              subd_tax_ido: e.target.value,
            })
          }
          autoComplete="subd_tax_ido"
          name="subd_tax_ido"
          variant="outlined"
          required
          fullWidth
          id="subd_tax_ido"
          label="State/Province"
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setriderInfo({
              ...riderInfo,
              city_tax_ido: e.target.value,
            })
          }
          autoComplete="city_tax_ido"
          name="city_tax_ido"
          variant="outlined"
          required
          fullWidth
          id="city_tax_ido"
          label="City"
          autoFocus
        />
      </Grid>
    </Grid>
  );

  return (
    <>
      <VisitorTopBar isTopBarButtonActive="register" {...props} />
      <div style={{ paddingTop: '1px', minHeight: '100%' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              {riderForm}

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p>conta</p>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        email: e.target.value,
                      })
                    }
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        password: e.target.value,
                      })
                    }
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        r_password: e.target.value,
                      })
                    }
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I read and accept the terms of service."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  );
}
