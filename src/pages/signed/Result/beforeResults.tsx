import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Message from "components/Message";
import AppBar from "components/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import { base } from "config/api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  date: {
    width: "100%",
    margin: "8px 9px",
  },
  category: {
    width: "100%",
  },
  options: {
    display: "flex",
    padding: "16px",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    borderBottom: "1px solid #D5D5D5",
  },
  row: {
    display: "flex",
    flexDirection: "column",
  },
  action: {
    position: "unset",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewTrials(props: any) {
  const classes = useStyles();
  const [events, setEvents] = useState<any[]>([]);
  const [trials, setTrials] = useState<any[]>([]);
  const [data, setdata] = useState<any>([]);
  const [tempInfo, setTempInfo] = useState<any>({
    event_id: "",
    event_name: "",
    trial_id: "",
    trial_name: "",
    category: "",
  });

  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });

  useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        setEvents(r.data);
      })
      .catch(() => {});

    let params = { event_id: tempInfo.event_id };
    base
      .get(`/managedTrialsList`, { params })
      .then((r) => {
        setTrials(r.data);
      })
      .catch(() => {});
  }, [tempInfo.event_id]);

  const handleAddUrlInfo = () => {
    const temp = [...data];
    temp.push(tempInfo);
    setTempInfo({
      event_id: "",
      trial_id: "",
      category: "",
    });
    setdata(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.history.push('/result')
  };

  return (
    <>
      <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      />
      <AppBar title="Choose new trial" {...props} />
      <div style={{ paddingTop: "1px", minHeight: "calc(100% - 56px)" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Penalties
                </Typography>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Event
                  </InputLabel>
                  <Select
                    name="event_id"
                    labelId="Event"
                    id="Event"
                    value={tempInfo.event_id}
                    label="Event"
                  >
                    {events.map((event) => (
                      <MenuItem
                        value={event.id}
                        onClick={() => {
                          setTempInfo({
                            ...tempInfo,
                            event_id: event.id,
                            event_name: event.event_name,
                          });
                        }}
                      >
                        {event.event_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Trial
                  </InputLabel>
                  <Select
                    name="trial_id"
                    label="Trial"
                    labelId="Trial"
                    id="Trial"
                    value={tempInfo.trial_id}
                    onChange={(e) =>
                      setTempInfo({
                        ...tempInfo,
                        trial_id: e.target.value,
                      })
                    }
                  >
                    {tempInfo.event_id ? (
                      trials.map((trial) => (
                        <MenuItem value={trial.id}>{trial.name}</MenuItem>
                      ))
                    ) : (
                      <MenuItem value="">Choose a event first</MenuItem>
                    )}
                  </Select>
                </FormControl>

                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  fullWidth
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Category
                  </InputLabel>
                  <Select
                    name="category"
                    label="Category"
                    labelId="Category"
                    id="Category"
                    value={tempInfo.category}
                    onChange={(e) =>
                      setTempInfo({
                        ...tempInfo,
                        category: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
                    <MenuItem value="expert">Expert</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => handleAddUrlInfo()}
              >
                Add table
              </Button>

              {/* RENDERS */}
              {data[0] ? (
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Penalties
                </Typography>
              ) : null}
              {data.map((content, i) => (
                <div
                  key={`infoList${content.event_id}`}
                  className={classes.options}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex" }}>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {content.event_id}.&nbsp;
                      </Typography>
                      <Typography component={"span"} gutterBottom variant="h6">
                        {content.event_name}
                      </Typography>
                    </div>
                    <div style={{ display: "flex" }}>
                      <Typography
                        component={"span"}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {content.trial_id}.&nbsp;
                      </Typography>
                      <Typography component={"span"} gutterBottom variant="h6">
                        {content.trial_name}
                      </Typography>
                    </div>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                    >
                      {content.category}
                    </Typography>
                  </div>
                  <Button
                    onClick={() => {
                      const temp = [...data];
                      // delete data[i];
                      temp.splice(i, 1);
                      setdata(temp);
                    }}
                    className={classes.action}
                    disableRipple
                    size="small"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </div>
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                View Result
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
