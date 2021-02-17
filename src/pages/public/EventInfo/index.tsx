/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
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
import { PublicAppBar, Modal } from 'components';
import { base, baseUrl } from 'config/api';
import { CardHeader } from './styles';
import Message from 'components/Message';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      // overflowX: 'hidden',
      maxHeight: '100%',
      height: '100%',
      margin: 0,
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
    subscribedEventContent: {
      overflowY: 'scroll',
    },
    media: {
      height: 140,
    },
    riderImage: {
      minHeight: 110,
      minWidth: 110,
      height: 110,
      width: 110,
    },
    action: {
      position: 'unset',
    },
    options: {
      display: 'flex',
      padding: '16px',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'transparent',
      borderBottom: '1px solid #D5D5D5',
    },
    row: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default function EventInfo(props: any) {
  const classes = useStyles();
  const [modalRender, setModalRender] = React.useState<any>('');
  const riderCardRef = React.useRef<any>(null);
  const { event_id } = useParams();
  const [dataTrial, setDataTrial] = React.useState<any>([]);

  const [eventInfo, seteventInfo] = React.useState<any>({});
  const [
    subscribedEventCardSize,
    setsubscribedEventCardSize,
  ] = React.useState<number>(0);

  const getImage = (image_id) => {
    return base.get(`/image-b64/${image_id}`).then(r=>r.data) 
  }

  React.useEffect(() => {
    localStorage.setItem("lastSeenEvent", event_id);

    base
      .get(`/trials/event/${event_id}`)
      .then((r) => {
        setDataTrial(r.data);
      })
      .catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    base
      .get(`/events`, { params: { event_id } })
      .then((r) => {
        seteventInfo(r.data);
        console.log(getImage(r.data.photo_event));
      })
      .catch((e) => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useLayoutEffect(() => {
    function updateSize() {
      setsubscribedEventCardSize(
        window.innerHeight - 140 - (props.appBarHeight || 0)
      );
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ margin: 0, overflowX: 'hidden' }}>
      <Message {...props} />
      <PublicAppBar title="Event information" {...props} />
      <Grid
        container
        spacing={3}
        className={classes.mainDiv}
        style={{ width: '100%' }}
      >
        <Grid item xs={12} sm={6}>
          <Card className={classes.root} ref={riderCardRef}>
            <CardContent className={classes.riderContent}>
              <CardMedia
                className={classes.riderImage}
                image={`${baseUrl}/image/${eventInfo.photo_event}`}
                title="Contemplative Reptile"
              />
              <div className="ml-20">
                <Typography gutterBottom variant="h5" component="h2">
                  {eventInfo.event_name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {new Date(
                    localStorage.getItem('temp_event_date_begin') || ''
                  ).toLocaleDateString('en-US')}
                </Typography>
              </div>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end' }}>
              <Button
                className={classes.action}
                variant="contained"
                size="small"
                color="primary"
                onClick={() => {
                  props.history.push(`/event/${event_id}/result`);
                }}
              >
                final result
              </Button>
            </CardActions>
          </Card>

          <Card style={{ margin: '20px 8px 0 8px' }} className={classes.root}>
            <CardHeader>
              <Typography gutterBottom variant="h5" component="h2">
                Partial results (single trial result)
              </Typography>
              <Divider />
            </CardHeader>
            <CardContent>
              {dataTrial.map((content, i) => (
                <div
                  key={`TrialList-${content.id}`}
                  className={classes.options}
                >
                  <div className={classes.row}>
                    <div style={{ display: 'flex' }}>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {content.id}.&nbsp;
                      </Typography>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                      >
                        {content.name}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    className={classes.action}
                    size="small"
                    color="primary"
                    onClick={() => {
                      localStorage.setItem('trial_id', content.id);
                      props.history.push(
                        `/event/${event_id}/partial_result/trial/${content.id}`
                      );
                    }}
                  >
                    View
                  </Button>
                </div>
              ))}
              {dataTrial.map((content, i) => (
                <div
                  key={`TrialList-${content.id}`}
                  className={classes.options}
                >
                  <div className={classes.row}>
                    <div style={{ display: 'flex' }}>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {content.id}.&nbsp;
                      </Typography>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                      >
                        {content.name}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    className={classes.action}
                    size="small"
                    color="primary"
                    onClick={() => {
                      localStorage.setItem('trial_id', content.id);
                      props.history.push(
                        `/event/${event_id}/partial_result/trial/${content.id}`
                      );
                    }}
                  >
                    View
                  </Button>
                </div>
              ))}
              {dataTrial.map((content, i) => (
                <div
                  key={`TrialList-${content.id}`}
                  className={classes.options}
                >
                  <div className={classes.row}>
                    <div style={{ display: 'flex' }}>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {content.id}.&nbsp;
                      </Typography>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                      >
                        {content.name}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    className={classes.action}
                    size="small"
                    color="primary"
                    onClick={() => {
                      localStorage.setItem('trial_id', content.id);
                      props.history.push(
                        `/event/${event_id}/partial_result/trial/${content.id}`
                      );
                    }}
                  >
                    View
                  </Button>
                </div>
              ))}
              {dataTrial.map((content, i) => (
                <div
                  key={`TrialList-${content.id}`}
                  className={classes.options}
                >
                  <div className={classes.row}>
                    <div style={{ display: 'flex' }}>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                        color="textSecondary"
                      >
                        {content.id}.&nbsp;
                      </Typography>
                      <Typography
                        component={'span'}
                        style={{ margin: 0 }}
                        gutterBottom
                        variant="h6"
                      >
                        {content.name}
                      </Typography>
                    </div>
                  </div>
                  <Button
                    className={classes.action}
                    size="small"
                    color="primary"
                    onClick={() => {
                      localStorage.setItem('trial_id', content.id);
                      props.history.push(
                        `/event/${event_id}/partial_result/trial/${content.id}`
                      );
                    }}
                  >
                    View
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <div style={{ margin: '18px 8px 0 8px' }}>
              <CardMedia
                style={{
                  borderTopLeftRadius: '4px',
                  borderTopRightRadius: '4px',
                }}
                className={classes.media}
                image={`${baseUrl}/image/${eventInfo.photo_folder}`}
                // image={
                //   eventInfo.photo_folder ||
                //   'https://i.pinimg.com/736x/34/df/ee/34dfeed20d644ba572bd2d8d31bc8d77.jpg'
                // }
                title="Contemplative Reptile"
              />
            </div>
            <Card style={{ margin: '0px 8px 0 8px' }} className={classes.root}>
              <CardHeader>
                <Typography gutterBottom variant="h5" component="h2">
                  Lorem Ipsum
                </Typography>
                <Divider />
              </CardHeader>
              <CardContent>{eventInfo.long_text}</CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
