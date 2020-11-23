import React, { useState, useEffect } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Sidebar from "../../../components/Sidebar";
import styles from "../EventOptions/useStyles";
import { Card, CardContent, Button, Typography } from "@material-ui/core";
import { base } from "../../../config/api";

export default function Trials(props: any) {
  const classes = styles();
  const [dataTrial, setDataTrial] = useState<any>([]);

  useEffect(() => {
    let params = { event_id: localStorage.getItem("event_id") };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
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
            </div>
            <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
              onClick={() => {
                localStorage.setItem("trial_id", content.id);
                props.history.push(`/scores`);
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
