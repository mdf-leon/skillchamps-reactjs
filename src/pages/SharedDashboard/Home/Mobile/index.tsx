import React from "react";

// import AppBarTab from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Box from '@material-ui/core/Box';
import TabNav from "components/TabNav";
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Divider,
} from "@material-ui/core";
import {
  CardHeader,
  HistoryInfoDiv,
  DivDepoisPensoNome,
  FirstMedal,
} from "../Desktop/styles";
import SubscribedEvents from "../SubscribedEvents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      overflow: "hidden",
    },
    root: {
      flexGrow: 1,
      margin: "18px 8px 0 8px",
    },
    riderContent: {
      display: "flex",
      justifyContent: "flex-start",
      overflow: "auto",
    },
    historyContent: {
      overflow: "auto",
    },
    subscribedEventContent: {
      overflow: "auto",
    },
    riderImage: {
      minHeight: 110,
      minWidth: 110,
      height: 110,
      width: 110,
    },
    historyImg: {
      height: 75,
      width: 75,
    },
    action: {
      position: "unset",
    },
  })
);

// const styles = {
//   tabs: {
//     background: '#fff',
//   },
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     backgroundColor: '#FEA900',
//   },
//   slide2: {
//     backgroundColor: '#B3DC4A',
//   },
//   slide3: {
//     backgroundColor: '#6AC0FF',
//   },
// };

export default function ManageableEvents(props: any) {
  // const classes = homeStyles();
  // const theme = useTheme();
  // const [events, setEvents] = React.useState<any[]>([]);
  // const [hasInstitute, setHasInstitute] = React.useState<any>(false);

  // muda o valor da aba atual
  // const [tabIndex, settabIndex] = React.useState<any>(0);

  function testBody(str) {
    return <div>{str}</div>;
  }

  const classes = useStyles();

  const historyMocked = [
    {
      photo:
        "https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png",
      event_name: "Discover",
      institute: "Institute",
      podium: 0,
    },
    {
      photo:
        "https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png",
      event_name: "Discover",
      institute: "Institute",
      podium: 1,
    },
    {
      photo:
        "https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png",
      event_name: "Discover",
      institute: "Institute",
      podium: 2,
    },
    {
      photo:
        "https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png",
      event_name: "Discover",
      institute: "Institute",
      podium: 3,
    },
  ];

  const OverView = (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.riderContent}>
          <CardMedia
            className={classes.riderImage}
            image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
            title="Contemplative Reptile"
          />
          <div className="ml-20">
            <Typography gutterBottom variant="h5" component="h2">
              Rider very big large name Rider very big large name
            </Typography>
          </div>
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
            SIGN TO EVENT
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardHeader>
          <Typography gutterBottom variant="h5" component="h2">
            History
          </Typography>
          <Divider />
        </CardHeader>
        <CardContent className={classes.historyContent}>
          {historyMocked.map((history) => (
            <div>
              <HistoryInfoDiv>
                <CardMedia
                  className={classes.historyImg}
                  image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
                  title="Contemplative Reptile"
                />
                <DivDepoisPensoNome>
                  <div>
                    <Typography className="ml-20" variant="h5" component="h2">
                      {history.event_name}
                    </Typography>
                    <Typography
                      className="ml-20"
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {history.institute}
                    </Typography>
                  </div>
                  <FirstMedal size="40" internalSize="5">
                    {history.podium}
                  </FirstMedal>
                </DivDepoisPensoNome>
              </HistoryInfoDiv>
              <Divider />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const EventsView = (
    <Card className={classes.root}>
      <CardHeader>
        <Typography gutterBottom variant="h5" component="h2">
          Subscribed Events
        </Typography>
        <Divider />
      </CardHeader>
      <CardContent className={classes.subscribedEventContent}>
        <div>
          <SubscribedEvents {...props} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <TabNav
        tabList={[
          { label: "Overview", body: testBody(OverView) },
          { label: "Events", body: testBody(EventsView) },
          { label: "Manager", body: testBody("TODO") },
        ]}
      />
    </>
  );
}
