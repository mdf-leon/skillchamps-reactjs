import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { CardContent, CardMedia, Divider, Typography } from '@material-ui/core';

import { HistoryInfoDiv, DivDepoisPensoNome } from './styles';

import { base } from 'config/api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    historyContent: {
      position: 'relative',
      overflowY: 'scroll',
    },
    historyImg: {
      height: 75,
      width: 75,
    },
  })
);

export default function ContentPopover(props: any) {
  const classes = useStyles();

  const historyList: any[] = JSON.parse(localStorage.getItem('events_on_management') || '[]') || [];
  React.useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        localStorage.setItem('events_on_management', JSON.stringify(r.data));
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ minWidth: '400px' }}>
      <CardContent
        className={classes.historyContent}
        id="boi1"
        style={{ height: props.historyCardSize, minHeight: '100px' }}
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
}
