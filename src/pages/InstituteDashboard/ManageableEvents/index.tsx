import React, { useState, useEffect } from "react";
import AppBar from "../../../components/AppBar";
import Message from "components/Message";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CheckCircle, VisibilityOff, Cancel } from "@material-ui/icons";
import { base, baseUrl } from "../../../config/api";
import { Button } from "@material-ui/core";
import ConeSVG from "assets/svg/traffic-cone-svgrepo-com 1.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {},
    root: {
      display: "flex",
      flexDirection: "column",
      background: "transparent",
      boxShadow: "0px 0px 0px 0px #888888",
      margin: "5px 0 5px 0",
      width: "100%",
      cursor: "pointer",
    },
    ternaryDiv: {
      width: "100%",
    },
    details: {
      display: "flex",
      marginLeft: "5px",
      paddingRight: "5px",
      flexDirection: "row",
      borderBottom: "1px solid #D5D5D5",
      alignItems: "center",
      width: "100%",
    },
    content: {
      flex: "1 0 auto",
      padding: "16px 16px 16px 0",
    },
    cover: {
      height: 92,
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

export default function ManageableEvents(props: any) {
  const classes = useStyles();
  // const theme = useTheme();
  const [events, setEvents] = useState<any[]>([]);
  const [hasInstitute, setHasInstitute] = useState<any>(false);

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
      })
      .catch(() => {});
    base
      .get(`/showInstitute`)
      .then(() => {
        setHasInstitute(true);
      })
      .catch(() => {});
  }, []);

  // function getCurrentDate(separator = "") {
  //   let newDate = new Date();
  //   let date = newDate.getDate();
  //   let month = newDate.getMonth() + 1;
  //   let year = newDate.getFullYear();

  //   return `${year}${separator}${
  //     month < 10 ? `0${month}` : `${month}`
  //   }${separator}${date}`;
  // }

  const todayEvent: any[] = events[0]
    ? events.filter(
        (event) =>
          new Date(event.date_begin?.replace(".000Z", "")).toDateString() ===
          new Date().toDateString()
      )
    : [];

  return (
    <>
      <AppBar title="Manageable Events List" {...props} />
      {hasInstitute ? (
        <div>
          <Message {...props} />
          <div className={classes.mainDiv}>
            <div className={classes.ternaryDiv}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => props.history.push("/newEvent")}
                >
                  NEW event
                </Button>
              </div>
              <Typography
                component="h6"
                variant="h6"
                style={{ textAlign: "center", marginTop: "22px" }}
              >
                Today
              </Typography>
              {todayEvent[0] ? (
                todayEvent.map((event) => (
                  <Card
                    key={`todayEvent${event.id}`}
                    className={classes.root}
                    onClick={() => {
                      localStorage.setItem("event_id", event.id);
                      props.history.push(`/eventOptions`, {
                        event_name: event.event_name,
                        event_date: event.date_begin,
                      });
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "5px" }}>
                      <CardMedia
                        className={classes.cover}
                        image={
                          event.photo_event
                            ? `${baseUrl}/image/${event.photo_event}`
                            : ConeSVG
                        }
                        title="Live from space album cover"
                      />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h6" variant="h6">
                            {event.id}. {event.event_name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {new Date(event.date_begin).toLocaleDateString(
                              "en-US"
                            )}
                          </Typography>
                        </CardContent>
                        {renderIcons("Cancel")}
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Typography
                  color="textSecondary"
                  component="h6"
                  variant="h6"
                  style={{ textAlign: "center", marginTop: "22px" }}
                >
                  No events
                </Typography>
              )}
            </div>

            <div className={classes.ternaryDiv}>
              <Typography
                component="h6"
                variant="h6"
                style={{ textAlign: "center", marginTop: "22px" }}
              >
                Other Events
              </Typography>
              {events[0] ? (
                events.map((event) => (
                  <Card
                    key={`events${event.id}`}
                    className={classes.root}
                    onClick={() => {
                      localStorage.setItem("event_id", event.id);
                      localStorage.setItem("temp_event_name", event.event_name);
                      localStorage.setItem(
                        "temp_event_date_begin",
                        event.date_begin
                      );
                      props.history.push(`/eventOptions`);
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "5px" }}>
                      <CardMedia
                        className={classes.cover}
                        image={
                          event.photo_event
                            ? `${baseUrl}/image/${event.photo_event}`
                            : ConeSVG
                        }
                        title="Live from space album cover"
                      />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h6" variant="h6">
                            {event.id}. {event.event_name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {new Date(event.date_begin).toLocaleDateString(
                              "en-US"
                            )}
                          </Typography>
                        </CardContent>
                        {renderIcons("Cancel")}
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Typography
                  color="textSecondary"
                  component="h6"
                  variant="h6"
                  style={{ textAlign: "center", marginTop: "22px" }}
                >
                  No events
                </Typography>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.mainDiv}>
          <Typography
            component="h6"
            variant="h6"
            style={{ textAlign: "center", marginTop: "22px" }}
          >
            You don't have an institute, please create one{" "}
            <a href="/newInstitute">here.</a>
          </Typography>
        </div>
      )}
    </>
  );
}
