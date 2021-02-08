import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@material-ui/core";
import { CardHeader } from "./styles";
import OngoingEvents from "../LocalComponents/OngoingEvents";
import InstituteContent from "../LocalComponents/InstituteContent";
import PastEventsContent from "../LocalComponents/PastEventsContent";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      maxHeight: "100%",
      height: "100%",
      margin: 0,
      marginBottom: "10px",
      paddingBottom: "10px",
    },
    root: {
      flexGrow: 1,
      margin: "18px 8px 0 8px",
    },
    subscribedEventContent: {
      overflowY: "scroll",
    },
  })
);

export default function DesktopHome(props: any) {
  const classes = useStyles();
  const riderCardRef = React.useRef<any>(null);

  const [historyCardSize, sethistoryCardSize] = React.useState<number>(0);
  const [
    subscribedEventCardSize,
    setsubscribedEventCardSize,
  ] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    function updateSize() {
      const riderCardHeight =
        riderCardRef?.current?.getBoundingClientRect()?.height || 0;
      sethistoryCardSize(
        window.innerHeight - riderCardHeight - 138 - (props.appBarHeight || 0)
      );
      setsubscribedEventCardSize(
        window.innerHeight - 120 - (props.appBarHeight || 0)
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={3} className={classes.mainDiv}>
      <Grid item xs={6}>
        <Card className={classes.root} ref={riderCardRef}>
          <InstituteContent {...props} />
        </Card>
        <Card className={classes.root} style={{ height: "auto" }} id="paidoboi">
          <CardHeader>
            <Typography gutterBottom variant="h5" component="h2">
              Past events
            </Typography>
            <Divider />
          </CardHeader>
          <PastEventsContent {...props} historyCardSize={historyCardSize} />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.root}>
          <CardHeader>
            <Typography gutterBottom variant="h5" component="h2">
              Ongoing events
            </Typography>
            <Divider />
          </CardHeader>
          <CardContent
            className={classes.subscribedEventContent}
            style={{ height: subscribedEventCardSize, minHeight: "100px" }}
          >
            <OngoingEvents {...props} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

// const modalContent = (modalName, id = null) => { // modal da paytime que eU FIZ E MATEUS N GOSTA
//   const modals = {
//     PermissionsModal: <PermissionsModal onButtonCancel={() => setActiveModal('')} id={id} />
//   }
//   return modals[modalName] || null
// }
