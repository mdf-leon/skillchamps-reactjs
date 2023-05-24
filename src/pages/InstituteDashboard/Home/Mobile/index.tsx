import React from "react";
import Message from "components/Message";

import TabNav from "components/TabNav/index";

import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";

import { CardHeader } from "../Desktop/styles";

import OngoingEvents from "../LocalComponents/OngoingEvents";
import InstituteContent from "../LocalComponents/InstituteContent";
import PastEventsContent from "../LocalComponents/PastEventsContent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      overflow: "hidden",
    },
    root: {
      flexGrow: 1,
      margin: "18px 8px 0 8px",
    },
    historyContent: {
      overflow: "auto",
    },
  })
);

export default function MobileHome(props: any) {
  function testBody(str) {
    return <div>{str}</div>;
  }

  const classes = useStyles();

  const OverView = (
    <div id="overview-main">
      <Card
        className={classes.root}
        style={{ margin: "0", paddingTop: "15px" }}
      >
        <InstituteContent {...props} />
      </Card>

      <Card className={classes.root} style={{ marginBottom: "15px" }}>
        <CardHeader>
          <Typography gutterBottom variant="h5" component="h2">
            History
          </Typography>
          <Divider />
        </CardHeader>
        <CardContent className={classes.historyContent}>
          <PastEventsContent {...props} />
        </CardContent>
      </Card>
    </div>
  );

  const EventsView = <OngoingEvents {...props} />;

  return (
    <>
      <Message {...props} />
      <TabNav
        tabList={[
          { label: "Overview", body: testBody(OverView) },
          { label: "Events", body: testBody(EventsView) },
          { label: "Notifications", body: testBody("TODO") },
        ]}
      />
    </>
  );
}

// const classes = homeStyles();
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
// const theme = useTheme();
// const [events, setEvents] = React.useState<any[]>([]);
// const [hasInstitute, setHasInstitute] = React.useState<any>(false);

// muda o valor da aba atual
// const [tabIndex, settabIndex] = React.useState<any>(0);
