import React, { useState, useEffect } from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { CheckCircle, VisibilityOff, Cancel } from "@material-ui/icons";
import { base } from "../../../config/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: "none",
      boxShadow: "0px 0px 0px 0px #888888",
    },
    details: {
      display: "flex",
      marginLeft: "16px",
      flexDirection: "row",
      borderBottom: "1px solid #D5D5D5",
      alignItems: "center",
    },
    content: {
      flex: "1 0 auto",
      padding: "16px 16px 16px 0",
    },
    cover: {
      width: 151,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  })
);

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [events, setEvents] = useState([]);

  const renderIcons = (iconName) => {
    switch (iconName) {
      case "CheckCircle":
        return <CheckCircle />;
      case "VisibilityOff":
        return <VisibilityOff />;
      case "Cancel":
        return <Cancel fill="#D5D5D5" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        setEvents(r.data);
        console.log(r.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg"
        title="Live from space album cover"
      />
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {events[0]
          ? events.map((event) => (
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6">
                    Evento Atual Um
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    25/12/2020
                  </Typography>
                </CardContent>
                {renderIcons("Cancel")}
              </div>
            ))
          : null}
      </div>
    </Card>
  );
}
