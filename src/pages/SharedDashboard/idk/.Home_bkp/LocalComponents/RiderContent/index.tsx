import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import {
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    riderContent: {
      display: 'flex',
      justifyContent: 'flex-start',
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
  })
);

export default function RiderCardContent(props: any) {
  const classes = useStyles();

  const [riderInfo, setriderInfo] = React.useState<any>({});

  React.useEffect(() => {
    setriderInfo(JSON.parse(localStorage.getItem('rider_info') || ''));
  }, []);

  return (
    <div>
      <CardContent className={classes.riderContent}>
        <CardMedia
          className={classes.riderImage}
          image={`${baseUrl}/image/${eventInfo.photo_event}`}
          title="Contemplative Reptile"
        />
        <div className="ml-20">
          <Typography gutterBottom variant="h5" component="h2">
            {riderInfo.name}
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
          onClick={() => props.history.push('/dashboard/sign-to-event')}
        >
          SIGN TO EVENT
        </Button>
      </CardActions>
    </div>
  );
}
