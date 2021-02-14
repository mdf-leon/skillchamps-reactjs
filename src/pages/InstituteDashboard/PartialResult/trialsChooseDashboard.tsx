import React, { useState, useEffect } from "react";
import AppBar from "../../../components/AppBar";
import styles from "./useStyles";
import { Card, CardContent, Button, Typography } from "@material-ui/core";
import { base } from "../../../config/api";
import { useParams } from "react-router-dom";

export default function Trials(props: any) {
  const classes = styles();
  const {
    // institute_id,
    event_id,
  } = useParams();
  const [dataTrial, setDataTrial] = useState<any>([]);

  useEffect(() => {
    let params = { event_id };
    base
      .get("/managedTrialsList", { params })
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AppBar title="Choose a Trial" isManager {...props} />
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
          <div key={`TrialList-${content.id}`} className={classes.options}>
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
              size="small"
              color="primary"
              onClick={() => {
                localStorage.setItem("trial_id", content.id);
                props.history.push(
                  `/event/${event_id}/partial_result/trial/${content.id}`
                );
              }}
            >
              View
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
