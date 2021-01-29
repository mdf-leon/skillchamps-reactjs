import React from "react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import { CardContent, CardMedia, Divider, Typography } from "@material-ui/core";

import {
  HistoryInfoDiv,
  DivDepoisPensoNome,
  FirstMedal,
  SecondMedal,
  ThirdMedal,
} from "./styles";

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

export default function HistoryCardContent(props: any) {
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

  return (
    <div>
      <CardContent
        className={classes.historyContent}
        id="boi1"
        style={{ height: props.historyCardSize, minHeight: "100px" }}
      >
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
                {renderPodium(history.podium_placement.podium)}
              </DivDepoisPensoNome>
            </HistoryInfoDiv>
            <Divider />
          </div>
        ))}
      </CardContent>
    </div>
  );
}
