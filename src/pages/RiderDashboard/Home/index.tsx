import React from "react";
import AppBar from "../../../components/AppBar";
// import { Grid, Hidden } from "@material-ui/core";

import MobileView from "./Mobile";
import DesktopView from "./Desktop";
import ContentPopover from "./LocalComponents/ManageContent";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Hidden,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@material-ui/core";

import {
  HistoryInfoDiv,
  DivDepoisPensoNome,
  FirstMedal,
  SecondMedal,
  ThirdMedal,
} from "./LocalComponents/ManageContent/styles";

import { base } from "config/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    historyContent: {
      position: "relative",
      overflowY: "scroll",
    },
    historyImg: {
      height: 75,
      width: 75,
    },
  })
);
// import { base } from 'config/api';

export default function SharedDashboardHome(props: any) {
  const classes = useStyles();

  const [historyList, sethistoryList] = React.useState<any>([]);

  const renderPodium = (podium) => {
    if (podium === 0) return null;
    const Medal = {
      1: FirstMedal,
      2: SecondMedal,
      3: ThirdMedal,
    }[podium];
    return (
      <Medal size="40" internalSize="5">
        {podium}
      </Medal>
    );
  };

  React.useEffect(() => {
    base
      .get(`/eventsHistory`)
      .then((r) => {
        sethistoryList(r.data);
      })
      .catch(() => {});
  }, []);
  // TODO: pegar se o usuario tem algum evento pra gerir de alguma forma
  //  // const [hasManageableEvents, sethasmanageableEvents] = React.useState<any>(null)

  const Aaaa = (
    <div style={{ minWidth: "400px" }}>
      <CardContent
        className={classes.historyContent}
        id="boi1"
        style={{ height: props.historyCardSize, minHeight: "100px" }}
      >
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            Choose an event to manage
          </Typography>
          <Divider />
        </div>
        {historyList.map((history, i) => (
          <div
            key={`HistoryInfoDiv-${i}`}
            onClick={() =>
              props.history.push(`/dashboard/history/event/${history.event_id}`)
            }
          >
            <HistoryInfoDiv>
              <CardMedia
                className={classes.historyImg}
                image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
                title="Contemplative Reptile"
              />
              <DivDepoisPensoNome className="ml-10">
                <div>
                  <Typography variant="h5" component="h2">
                    {history.event_name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {history.institute_name}
                  </Typography>
                </div>
              </DivDepoisPensoNome>
            </HistoryInfoDiv>
            <Divider />
          </div>
        ))}
      </CardContent>
    </div>
  );

  return (
    <div style={{ maxHeight: "100%", minHeight: "100%", overflowX: "hidden" }}>
      <AppBar
        title="Rider's Dashboard"
        hasManageableEvents
        popoverTitle="Manage"
        contentPopover={Aaaa}
        {...props}
      />
      <Grid container style={{ height: "calc(100% - 64px)" }}>
        <Hidden smUp>
          {/* only shows on mobile (not-sm and above it)*/}
          <MobileView {...props} />
        </Hidden>
        <Hidden xsDown>
          {/* only shows on desktop (sm or bigger)*/}
          <DesktopView appBarHeight={64} {...props} />
        </Hidden>
      </Grid>
    </div>
  );
}

// grid method
// {/* <Grid xs={12} md={6}>
//   <p>adsf</p>
// </Grid>
// <Grid xs={12} md={6}>
//   <p>adsf</p>
// </Grid> */}
