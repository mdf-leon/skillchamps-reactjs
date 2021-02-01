import React from "react";
import AppBar from "components/AppBar";
import styles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

export default function EventOptions(props: any) {
  const classes = styles();

  return (
    <>
      <AppBar title="Event Options" {...props} />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {localStorage.getItem("temp_event_name")}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(
                  localStorage.getItem("temp_event_date_begin") || ""
                ).toLocaleDateString("en-US")}
              </Typography>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
              title="Contemplative Reptile"
            />
          </CardContent>
          <CardActions style={{ justifyContent: "space-between" }}>
            <Button
              className={classes.action}
              
              size="small"
              color="primary"
              onClick={() => console.log()}
            >
              SETTINGS
            </Button>
            <Button
              className={classes.action}
              
              variant="contained"
              size="small"
              color="primary"
              onClick={() => props.history.push("/beforePoints")}
            >
              START TRIAL
            </Button>
          </CardActions>
        </Card>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Dashboard
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/trialsChooseDashboard`)}
            
            size="small"
            color="primary"
          >
            View
          </Button>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Score
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/trialsAndRiderChoose`)}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Trials
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/trials`)}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Riders
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/riders`)}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div>
        {/* <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Penalties
          </Typography>
          <Button
            className={classes.action}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div> */}
        {/* <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Bonuses
          </Typography>
          <Button
            className={classes.action}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div> */}
      </div>
    </>
  );
}
