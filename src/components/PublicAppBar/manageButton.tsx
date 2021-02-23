import React from "react";
import { baseUrl } from "config/api";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { CardContent, CardMedia, Divider, Typography } from "@material-ui/core";

import { HistoryInfoDiv, DivDepoisPensoNome } from "./styles";

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

export default function ManageButton(props: any) {
  const classes = useStyles();
  return (
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
        {props.events.map((event, i) => (
          <div
            key={`HistoryInfoDiv-${i}`}
            onClick={
              () => props.history.push(`/dashboard/manage/event/${event.id}`) // deveria ser: /dashboard/manage/event/:event_id
            }
          >
            <HistoryInfoDiv>
              <CardMedia
                className={classes.historyImg}
                image={`${baseUrl}/image/${event.photo_folder}`}
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
}
