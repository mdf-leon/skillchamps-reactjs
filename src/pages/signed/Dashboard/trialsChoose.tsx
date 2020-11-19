import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Sidebar from "../../../components/Sidebar";
import styles from "../EventOptions/useStyles";
import { Modal } from "components";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { base } from "../../../config/api";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Trials(props: any) {
  const classes = styles();
  const [dataTrial, setDataTrial] = useState<any>([]);

  const [open, setOpen] = useState<any>(true);

  const handleClose = () => {
    setOpen(false);
    let state = { ...props.history.location.state };
    delete state.created;
    props.history.replace({ ...props.history.location, state });
  };

  useEffect(() => {
    let params = { event_id: localStorage.getItem("event_id") };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    let params = { event_id: localStorage.getItem("event_id") };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch(() => {});
    if (props.location.state?.created) {
      setOpen(true);
    }
  }, []);

  return (
    <>
      {props.location.state?.created ? (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Trial successfully created
          </Alert>
        </Snackbar>
      ) : null}
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="Trials"
        rightIcon="gear"
      />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography
              style={{ textAlign: "center", width: "100%", margin: 0 }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              Choose a Trial
            </Typography>
          </CardContent>
        </Card>
        {dataTrial.map((content, i) => (
          <div key={`TrialList${content.id}`} className={classes.options}>
            <div className={classes.row}>
              <div style={{ display: "flex" }}>
                <Typography
                  component={"span"}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                  color="textSecondary"
                >
                  {content.id}.&nbsp;
                </Typography>
                <Typography
                  component={"span"}
                  style={{ margin: 0 }}
                  gutterBottom
                  variant="h6"
                >
                  {content.name}
                </Typography>
              </div>
              <Typography
                component={"span"}
                style={{ margin: 0 }}
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                {content.license_ido} - {content.motorcycle_plate}
              </Typography>
            </div>
            <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
              onClick={() => {
                localStorage.setItem("trial_id", content.id);
                props.history.push(
                  `/dashboard/event/${localStorage.getItem("event_id")}/trial/${
                    content.id
                  }`,
                  { trialName: dataTrial.name }
                );
              }}
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
