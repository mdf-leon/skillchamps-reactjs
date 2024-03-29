import React from "react";
// import Message from "components/Message";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CheckCircle, VisibilityOff, Cancel } from "@material-ui/icons";
import { base, baseUrl } from "config/api";
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
      "&:hover": {
        backgroundColor: "#00000012",
      },
    },
    ternaryDiv: {
      width: "100%",
      overflow: "auto",
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
  })
);

export default function SubscribedEventsComponent(props: any) {
  const classes = useStyles();
  const [events, setEvents] = React.useState<any[]>();
  const institute_info = JSON.parse(
    localStorage.getItem("institute_info") || ""
  );

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

  const getTodayWithoutTime = () => {
    const today = new Date().toISOString();
    return today.split("T")[0] + "T00:00:00.000Z";
  };

  React.useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        console.log(r.data);
        setEvents(r.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }, []);

  // const todayEvent: any[] = events[0]
  //   ? events.filter(
  //       (event) =>
  //         new Date(event.date_begin?.replace('.000Z', '')).toDateString() ===
  //         new Date().toDateString()
  //     )
  //   : [];

  const todayEvent: any[] =
    events && events[0]
      ? events.filter((event) => {
          //        // console.log(event.date_begin);
          //        // console.log(getTodayWithoutTime());

          return event.date_begin === getTodayWithoutTime();
        })
      : [];

  return (
    <>
      {events && events[0] ? (
        <div>
          {/* <Message {...props} /> */}
          <div className={classes.mainDiv}>
            <div className={classes.ternaryDiv}>
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
                      props.history.push(
                        `/dashboard/institute/${institute_info.id}/manage/event/${event.id}`
                      );
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
                            {new Date(
                              new Date(event.date_begin).setDate(
                                new Date(event.date_begin).getDate() + 1
                              )
                            ).toLocaleDateString("en-US")}
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
                  There are no events happening today.
                </Typography>
              )}
            </div>

            <div className={classes.ternaryDiv}>
              <Typography
                component="h6"
                variant="h6"
                style={{ textAlign: "center", marginTop: "22px" }}
              >
                Future Events
              </Typography>
              {events[0] ? (
                events.map((event) => (
                  <Card
                    key={`events${event.id}`}
                    className={classes.root}
                    onClick={() => {
                      // localStorage.setItem('event_id', event.id);
                      // localStorage.setItem('temp_event_name', event.event_name);
                      // localStorage.setItem(
                      //   'temp_event_date_begin',
                      //   event.date_begin
                      // );

                      props.history.push(
                        `/dashboard/institute/${institute_info.id}/manage/event/${event.id}`
                      );
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
                            {new Date(
                              new Date(event.date_begin).setDate(
                                new Date(event.date_begin).getDate() + 1
                              )
                            ).toLocaleDateString("en-US")}
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
      ) : events ? (
        <p>There are no events.</p>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
