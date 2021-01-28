import React from "react";
import AppBar from "../../../components/AppBar";
// import { Grid, Hidden } from "@material-ui/core";

import MobileView from "./Mobile";
import DesktopView from "./Desktop";

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

  const events: any[] = JSON.parse(localStorage.getItem('events_on_management') || '[]') || [];
  React.useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        localStorage.setItem('events_on_management', JSON.stringify(r.data));
      })
      .catch(() => {});
  }, []);
  // TODO: pegar se o usuario tem algum evento pra gerir de alguma forma
  //  // const [hasManageableEvents, sethasmanageableEvents] = React.useState<any>(null)

  const Aaaa = ( // TODO: passar para um componente e importar direto na pasta do AppBar
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
        {events.map((event, i) => (
          <div
            key={`HistoryInfoDiv-${i}`}
            onClick={() =>
              props.history.push(`/eventOptions`) // deveria ser: /dashboard/manage/event/:event_id
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
                    {event.event_name}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {event.institute_name}
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
        contentPopover={Aaaa} // TODO: Mudar para hasManageMenu
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
