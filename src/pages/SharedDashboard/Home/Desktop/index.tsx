import React from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';
import {
  CardHeader,
  HistoryInfoDiv,
  DivDepoisPensoNome,
  FirstMedal,
} from './styles';
import SubscribedEvents from '../SubscribedEvents';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      // overflowX: 'hidden',
      maxHeight: 'calc(100% - 64px)',
      marginBottom: '10px',
      paddingBottom: '10px',
    },
    root: {
      flexGrow: 1,
      margin: '18px 8px 0 8px',
      // overflow: "hidden",
    },
    riderContent: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    historyContent: {
      overflow: 'auto',
    },
    subscribedEventContent: {
      overflow: 'auto',
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
      position: 'unset',
    },
  })
);

export default function DesktopHome(props: any) {
  const classes = useStyles();

  const historyMocked = [
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Discover',
      institute: 'Institute',
      podium: 0,
    },
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Discover',
      institute: 'Institute',
      podium: 1,
    },
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Discover',
      institute: 'Institute',
      podium: 2,
    },
    {
      photo:
        'https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png',
      event_name: 'Discover',
      institute: 'Institute',
      podium: 3,
    },
  ];

  return (
    <Grid container spacing={3} style={{ maxHeight: '100%' }}>
      <Grid item xs={6}>
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
          <CardActions style={{ justifyContent: 'space-between' }}>
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
              onClick={() => props.history.push('/beforePoints')}
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
          <CardContent
            className={classes.historyContent}
            style={{ maxHeight: '70%', overflow: 'auto' }}
          >
            <div>
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
                        <Typography
                          className="ml-20"
                          variant="h5"
                          component="h2"
                        >
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
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.root}>
          <CardHeader>
            <Typography gutterBottom variant="h5" component="h2">
              Subscribed Events
            </Typography>
            <Divider />
          </CardHeader>
          <CardContent className={classes.subscribedEventContent}>
            <div>
              {/* <SubscribedEvents {...props} /> */}
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
