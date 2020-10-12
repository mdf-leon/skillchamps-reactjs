import React from "react";
import Sidebar from "../../../components/Sidebar";
import styles from "./styles";
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

export default function ImgMediaCard() {
  const classes = styles();

  return (
    <>
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="Event Options"
        rightIcon="gear"
      />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                Evento Tal
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                DATE
              </Typography>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
              title="Contemplative Reptile"
            />
          </CardContent>
          <CardActions>
            <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              SETTINGS
            </Button>
            <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              ADVANCED
            </Button>
          </CardActions>
        </Card>
        <div className={classes.options}>
          <Typography style={{margin: 0}} gutterBottom variant="h6" component="h6">
            Score
          </Typography>
          <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              Settings
            </Button>
        </div>
        <div className={classes.options}>
          <Typography style={{margin: 0}} gutterBottom variant="h6" component="h6">
            Trials
          </Typography>
          <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              Settings
            </Button>
        </div>
        <div className={classes.options}>
          <Typography style={{margin: 0}} gutterBottom variant="h6" component="h6">
            Riders
          </Typography>
          <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              Settings
            </Button>
        </div>
        <div className={classes.options}>
          <Typography style={{margin: 0}} gutterBottom variant="h6" component="h6">
            Penalties
          </Typography>
          <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              Settings
            </Button>
        </div>
        <div className={classes.options}>
          <Typography style={{margin: 0}} gutterBottom variant="h6" component="h6">
            Bonuses
          </Typography>
          <Button
              className={classes.action}
              disableRipple
              size="small"
              color="primary"
            >
              Settings
            </Button>
        </div>
      </div>
    </>
  );
}