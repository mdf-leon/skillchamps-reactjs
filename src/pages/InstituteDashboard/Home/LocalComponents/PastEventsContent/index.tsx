import React from "react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { CardContent, CardMedia, Divider, Typography } from "@material-ui/core";

import { HistoryInfoDiv, DivDepoisPensoNome } from "./styles";

import { base, baseUrl } from "config/api";
import { useParams } from "react-router-dom";

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

export default function PastEventsCardContent(props: any) {
  const classes = useStyles();
  const { institute_id } = useParams();
  const [pastEventsList, setpastEventsList] = React.useState<any>([]);

  React.useEffect(() => {
    base
      .get(`/managedHistoryList`)
      .then((r) => {
        setpastEventsList(r.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <CardContent
        className={classes.historyContent}
        id="boi1"
        style={{ height: props.historyCardSize, minHeight: "100px" }}
      >
        {pastEventsList.map((event, i) => (
          <div
            key={`HistoryInfoDiv-${i}`}
            onClick={() =>
              props.history.push(
                `/dashboard/institute/${institute_id}/manage/event/${event.id}`
              )
            }
          >
            <HistoryInfoDiv>
              <CardMedia
                className={classes.historyImg}
                image={`${baseUrl}/image/${event.photo_event}`}
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
