import React, { useState } from "react";
import Message from "components/Message";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "components/AppBar";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import { base } from "config/api";
import { useParams } from "react-router-dom";
import { InputLabel, FormControl } from "@material-ui/core";

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
    minWidth: 120,
  },
}));

export default function NewTrials(props: any) {
  const classes = useStyles();
  const { institute_id, event_id } = useParams();
  const [trialsList, settrialsList] = useState<any[]>([]);
  const [isBracketTrial, setIsBracketTrial] = useState<Boolean>(false);
  const [isBooleanTrial, setIsBooleanTrial] = useState<Boolean>(false);
  // const [isAutoBonus, setisAutoBonus] = useState<any>('');
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
    inverted: false,
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

  React.useEffect(() => {
    let params = { event_id };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        console.log(r.data);

        settrialsList(r.data);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBooleanTrial) {
      const boolInfo = {
        name: registerInfo.name,
        event_id,
      };

      base
        .post(`/createTrialBool`, boolInfo)
        .then((res) => {
          console.log(res);
          props.history.push(
            `/dashboard/institute/${institute_id}/manage/event/${event_id}/trials`,
            {
              // riderName:
              message_alert: {
                message: `Trial created successfully`,
                severity: "success",
              },
            }
          );
        })
        .catch((er) => {
          console.log(er);
          setMessageParams({
            message: "Sorry, the Trial could not be created",
            severity: "error",
          });
        });
    } else if (isBracketTrial) {
      const bracketInfo = {
        name: registerInfo.name,
        event_id,
      };

      base
        .post(`/createTrialBracket`, bracketInfo)
        .then((res) => {
          console.log(res);
          props.history.push(
            `/dashboard/institute/${institute_id}/manage/event/${event_id}/trials`,
            {
              // riderName:
              message_alert: {
                message: `Trial created successfully`,
                severity: "success",
              },
            }
          );
        })
        .catch((er) => {
          console.log(er);
          setMessageParams({
            message: "Sorry, the Trial could not be created",
            severity: "error",
          });
        });
    } else {
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
          props.history.push(
            `/dashboard/institute/${institute_id}/manage/event/${event_id}/trials`,
            {
              // riderName:
              message_alert: {
                message: `Trial created successfully`,
                severity: "success",
              },
            }
          );
        })
        .catch((er) => {
          setMessageParams({
            message: "Sorry, the Trial could not be created",
            severity: "error",
          });
          console.log(er.response.message);
        });
    }
  };

  const notBracket = (
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
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Bracket style? (Championship brackets)
                  </InputLabel>
                  <Select
                    name="bracketTrial"
                    label="Boolean trial? (only checks if completed)"
                    labelId="bracketTrial"
                    id="bracketTrial"
                    value={isBracketTrial}
                    onChange={(e) =>
                      setIsBracketTrial(e.target.value == "true")
                    }
                  >
                    <MenuItem value="false">
                      <em>No</em>
                    </MenuItem>
                    <MenuItem value="true">Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Boolean trial? (only checks if completed)
                  </InputLabel>
                  <Select
                    name="booleanTrial"
                    label="Boolean trial? (only checks if completed)"
                    labelId="booleanTrial"
                    id="booleanTrial"
                    value={isBooleanTrial}
                    onChange={(e) =>
                      setIsBooleanTrial(e.target.value == "true")
                    }
                  >
                    <MenuItem value="false">
                      <em>No</em>
                    </MenuItem>
                    <MenuItem value="true">Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {isBooleanTrial ? null : (
                <>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        inverted time? (first place is bigger time)
                      </InputLabel>
                      <Select
                        name="inverted"
                        label="inverted time? (first place is bigger time)"
                        labelId="inverted_time"
                        id="inverted"
                        value={registerInfo.inverted}
                        onChange={(e) =>
                          setRegisterInfo({
                            ...registerInfo,
                            inverted: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="false">
                          <em>No</em>
                        </MenuItem>
                        <MenuItem value="true">Yes</MenuItem>
                      </Select>
                    </FormControl>
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
                      fullWidth
                      name="time_penalty"
                      label="Penalty time (in milliseconds)"
                      id="Penalty time"
                      type="number"
                    />
                    <div className="d-flex">
                      <Typography
                        gutterBottom
                        color="error"
                        variant="subtitle2"
                        component="p"
                      >
                        Warning:&nbsp;
                      </Typography>
                      <Typography
                        gutterBottom
                        color="textSecondary"
                        variant="subtitle2"
                        component="p"
                      >
                        the time here needs to be in full milliseconds. i.e.
                        1000 = 1s
                      </Typography>
                    </div>
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
                  </Grid>
                </>
              )}
            </Grid>

            {isBooleanTrial ? null : (
              <>
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
                      fullWidth
                      name="bonusesName"
                      label="Bonuses name"
                      id="bonuses name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Automated Bonus?
                      </InputLabel>
                      <Select
                        name="condition"
                        label="Automated Bonus?"
                        labelId="condition"
                        id="condition"
                        value={tempBonuses.condition || ""}
                        onChange={(e) =>
                          setTempBonuses({
                            ...tempBonuses,
                            condition: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="unconditioned">
                          <em>No</em>
                        </MenuItem>
                        <MenuItem value="no_penalties">Zero Penalties</MenuItem>
                        <MenuItem value="full_bonus">Super Bonus</MenuItem>
                        <MenuItem value="trial_true">Finished Trial</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {tempBonuses.condition === "trial_true" ? (
                    <Grid item xs={12}>
                      <FormControl
                        fullWidth
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Trials
                        </InputLabel>
                        <Select
                          name="condition_trial_id"
                          label="Trials"
                          labelId="condition_trial_id"
                          id="condition_trial_id"
                          placeholder="Choose a trial"
                          value={tempBonuses.condition_trial_id || ""}
                          onChange={(e) =>
                            setTempBonuses({
                              ...tempBonuses,
                              condition_trial_id: e.target.value,
                            })
                          }
                        >
                          {trialsList.map((content, i) => {
                            if (content.boolean)
                              return (
                                <MenuItem
                                  value={content.id}
                                  key={`trial-list-id-${content.id}`}
                                >
                                  {content.name}
                                </MenuItem>
                              );
                            return null;
                          })}
                          <MenuItem value="full_bonus">Super Bonus</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  ) : null}
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
                      fullWidth
                      name="time_bonus"
                      label="Bonuses time (in milliseconds)"
                      id="time_bonus"
                      type="number"
                    />
                    <div className="d-flex">
                      <Typography
                        gutterBottom
                        color="error"
                        variant="subtitle2"
                        component="p"
                      >
                        Warning:&nbsp;
                      </Typography>
                      <Typography
                        gutterBottom
                        color="textSecondary"
                        variant="subtitle2"
                        component="p"
                      >
                        the time here needs to be in full milliseconds. i.e.
                        1000 = 1s
                      </Typography>
                    </div>
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
              </>
            )}
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
  );

  const isBracket = (
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
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Bracket style? (Championship brackets)
                  </InputLabel>
                  <Select
                    name="bracketTrial"
                    label="Boolean trial? (only checks if completed)"
                    labelId="bracketTrial"
                    id="bracketTrial"
                    value={isBracketTrial}
                    onChange={(e) => {
                      setIsBracketTrial(e.target.value == "true");
                      console.log(isBracketTrial);
                    }}
                  >
                    <MenuItem value="false">
                      <em>No</em>
                    </MenuItem>
                    <MenuItem value="true">Yes</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
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
  );

  return (
    <>
      <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      />
      <AppBar title="Create new trial" isManager {...props} />
      {isBracketTrial ? isBracket : notBracket}
    </>
  );
}
