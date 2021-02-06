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

  const [instituteInfo, setinstituteInfo] = React.useState<any>({});

  React.useEffect(() => {
    setinstituteInfo(JSON.parse(localStorage.getItem('institute_info') || ''));
  }, []);

  return (
    <div>
      <CardContent className={classes.riderContent}>
        <CardMedia
          className={classes.riderImage}
          image="https://www.pngkey.com/png/detail/128-1287904_cropped-coyote-banner-new-vector-new-1-california.png"
          title="Contemplative Reptile"
        />
        <div className="ml-20">
          <Typography gutterBottom variant="h5" component="h2">
            {instituteInfo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {localStorage.getItem('institute_info')
              ? 'Administration Privileges'
              : 'Manager Privileges'}
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
          onClick={() =>
            props.history.push(
              `/dashboard/institute/${
                JSON.parse(localStorage.getItem('institute_info') || '').id
              }/create/event`
            )
          }
        >
          Create an EVENT
        </Button>
      </CardActions>
    </div>
  );
}
