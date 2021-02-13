/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AppBar from 'components/AppBar';
import styles from './styles';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { base } from 'config/api';
import { useParams } from 'react-router-dom';

export default function EventOptions(props: any) {
  const classes = styles();
  const { institute_id, event_id } = useParams();
  const [event, setEvent] = React.useState<any>({});

  React.useEffect(() => {
    base
      .get(`/showEvent`, { params: { event_id } })
      .then((r) => {
        // console.log(r.data);
        setEvent(r.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }, []);

  return (
    <div>
      <AppBar title="Event Options" isManager {...props} />
      <div className={classes.mainDiv}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {event.event_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {new Date(event.date_begin).toLocaleDateString('en-US')}
              </Typography>
            </div>
            <CardMedia
              className={classes.cover}
              image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
              title="Contemplative Reptile"
            />
          </CardContent>
          <CardActions style={{ justifyContent: 'space-between' }}>
            <Button
              className={classes.action}
              size="small"
              color="primary"
              onClick={() => console.log('aqui vai levar para pagina de criaçao de history para dar o resultado final')} 
            >
              SETTINGS
            </Button>
            <Button
              className={classes.action}
              variant="contained"
              size="small"
              color="primary"
              onClick={() => props.history.push(`/dashboard/institute/${institute_id}/manage/event/${event_id}/score/select_trial_rider`)}
            >
              START TRIAL
            </Button>
          </CardActions>
        </Card>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Partial Result
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/dashboard/institute/${institute_id}/manage/event/${event_id}/partial_result`)}
            size="small"
            color="primary"
          >
            View
          </Button>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Score
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/trialsAndRiderChoose`)}
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Trials
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/dashboard/institute/${institute_id}/manage/event/${event_id}/trials`)}
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div>
        <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Riders
          </Typography>
          <Button
            className={classes.action}
            onClick={() => props.history.push(`/dashboard/institute/${institute_id}/manage/event/${event_id}/riders`)}
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div>
        {/* <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Penalties
          </Typography>
          <Button
            className={classes.action}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div> */}
        {/* <div className={classes.options}>
          <Typography
            style={{ margin: 0 }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Bonuses
          </Typography>
          <Button
            className={classes.action}
            
            size="small"
            color="primary"
          >
            Settings
          </Button>
        </div> */}
      </div>
    </div>
  );
}
