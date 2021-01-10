import React, { useState } from "react";
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
}));

export default function NewTrials(props: any) {
  const classes = useStyles();
  const [dataPenalties, setdataPenalties] = useState<any>([]);
  const [tempPenalties, setTempPenalties] = useState<any>({
    name: "",
    description: "",
    time_penalty: "",
  });
  const [dataBonuses, setdataBonuses] = useState<any>([]);
  const [tempBonuses, setTempBonuses] = useState<any>({
    name: "",
    description: "",
    time_bonus: "",
  });
  const [registerInfo, setRegisterInfo] = useState<any>({
    name: "",
  });

  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });

  const handleAddPenalty = () => {
    const temp = [...dataPenalties];
    temp.push(tempPenalties);
    setTempPenalties({
      name: "",
      description: "",
      time_penalty: "",
    });
    setdataPenalties(temp);
  };

  const handleAddBonuses = () => {
    const temp = [...dataBonuses];
    temp.push(tempBonuses);
    setTempBonuses({
      name: "",
      description: "",
      time_bonus: "",
    });
    setdataBonuses(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event_id = localStorage.getItem("event_id");
    const rdata = {
      ...registerInfo,
      event_id,
      penalties: [...dataPenalties],
      bonuses: [...dataBonuses],
    };
    console.log(rdata);

    base
      .post(`/createTrial`, rdata)
      .then(() => {
        props.history.push(`/Trials`, {
          // riderName:
          message_alert: {
            message: `Trial created successfully`,
            severity: "success",
          },
        });
      })
      .catch((er) => {
        setMessageParams({
          message: "Sorry, the Trial could not be created",
          severity: "error",
        });
        console.log(er.response.message);
      });
  };

  return (
    <>
      <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      />
      <AppBar title="Choose new trial" {...props} />
      <div style={{ paddingTop: "1px", minHeight: "100%" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create new Trial
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({ ...registerInfo, name: e.target.value })
                    }
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Penalties
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempPenalties({
                        ...tempPenalties,
                        name: e.target.value,
                      })
                    }
                    value={tempPenalties.name}
                    variant="outlined"
                    required
                    fullWidth
                    name="penaltyName"
                    label="Penalty name"
                    id="Penalty name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempPenalties({
                        ...tempPenalties,
                        description: e.target.value,
                      })
                    }
                    value={tempPenalties.description}
                    variant="outlined"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    id="Description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempPenalties({
                        ...tempPenalties,
                        time_penalty: e.target.value,
                      })
                    }
                    value={tempPenalties.time_penalty}
                    variant="outlined"
                    required
                    fullWidth
                    name="time_penalty"
                    label="Penalty time (in milliseconds)"
                    id="Penalty time"
                  />
                  <span>Warning: the time here needs to be in full milliseconds. i.e. 1000 = 1s</span>
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => handleAddPenalty()}
              >
                Add penalties
              </Button>
              {/* BONUSES */}
              <Grid container spacing={2}>
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Bonuses
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempBonuses({
                        ...tempBonuses,
                        name: e.target.value,
                      })
                    }
                    value={tempBonuses.name}
                    variant="outlined"
                    required
                    fullWidth
                    name="bonusesName"
                    label="Bonuses name"
                    id="bonuses name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempBonuses({
                        ...tempBonuses,
                        description: e.target.value,
                      })
                    }
                    value={tempBonuses.description}
                    variant="outlined"
                    required
                    fullWidth
                    name="bonuses_description"
                    label="Description"
                    id="bonuses_escription"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempBonuses({
                        ...tempBonuses,
                        time_bonus: e.target.value,
                      })
                    }
                    value={tempBonuses.time_bonus}
                    variant="outlined"
                    required
                    fullWidth
                    name="time_bonus"
                    label="Bonuses time (in milliseconds)"
                    id="time_bonus"
                  />
                  <span>Warning: the time here needs to be in full milliseconds. i.e. 1000 = 1s</span>
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => handleAddBonuses()}
              >
                Add Bonuses
              </Button>
              {/* RENDERS */}
              {dataPenalties[0] ? (
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Penalties
                </Typography>
              ) : null}
              {dataPenalties.map((content, i) => (
                <div
                  key={`TrialList${content.name}`}
                  className={classes.options}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                      color="textSecondary"
                    >
                      {content.name}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                    >
                      {content.description}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                    >
                      {content.time_penalty}
                    </Typography>
                  </div>
                  <Button
                    onClick={() => {
                      const temp = [...dataPenalties];
                      // delete dataPenalties[i];
                      temp.splice(i, 1);
                      setdataPenalties(temp);
                    }}
                    className={classes.action}
                    
                    size="small"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </div>
              ))}

              {dataBonuses[0] ? (
                <Typography
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginTop: "16px",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Bonuses
                </Typography>
              ) : null}
              {dataBonuses.map((content, i) => (
                <div
                  key={`TrialList${content.name}`}
                  className={classes.options}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                      color="textSecondary"
                    >
                      {content.name}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                    >
                      {content.description}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                    >
                      {content.time_bonus}
                    </Typography>
                  </div>
                  <Button
                    onClick={() => {
                      const temp = [...dataBonuses];
                      // delete dataBonuses[i];
                      temp.splice(i, 1);
                      setdataBonuses(temp);
                    }}
                    className={classes.action}
                    
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
                Create
              </Button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}
