import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import styles from "./useStyles";
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

export default function EventOptions(props: any) {
  const classes = styles();
  const [dataRider, setDataRider] = useState<any[]>([]);

  useEffect(() => {
    let params = { event_id: localStorage.getItem("event_id") };
    base
      .get("/managedRidersList", { params })
      .then((r) => {
        setDataRider(r.data);
        console.log(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <>
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="Riders"
        rightIcon="gear"
      />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                List of Riders
              </Typography>
            </div>
          </CardContent>
          <CardActions className={classes.actions}>
            {/* <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
              onClick={() => console.log()}
            >
              SETTINGS
            </Button> */}
            <Button
              className={classes.action}
              disableRipple
              variant="contained"
              size="small"
              color="primary"
              onClick={() => props.history.push("/newRider")}
            >
              NEW RIDER 
            </Button>
          </CardActions>
        </Card>
        {dataRider.map((content, i) => (
          <div className={classes.options}>
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
              color="secondary"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
