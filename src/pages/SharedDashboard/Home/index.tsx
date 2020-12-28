import React from 'react';
import AppBar from '../../../components/AppBar';
// import Message from 'components/Message';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { CheckCircle, VisibilityOff, Cancel } from '@material-ui/icons';
// import { base } from '../../../config/api';
import { Grid } from '@material-ui/core';
// import ConeSVG from 'assets/svg/traffic-cone-svgrepo-com 1.svg';

import MobileView from './mindex';

// import { homeStyles } from './styles';

export default function ManageableEvents(props: any) {
  // const classes = homeStyles();
  // const theme = useTheme();
  // const [events, setEvents] = React.useState<any[]>([]);
  // const [hasInstitute, setHasInstitute] = React.useState<any>(false);

  return (
    <>
      <AppBar title="Dashboard" {...props} />
      <Grid container>
        <MobileView />
        {/* <Grid xs={12} md={6}>
          <p>adsf</p>
        </Grid>
        <Grid xs={12} md={6}>
          <p>adsf</p>
        </Grid> */}
      </Grid>
    </>
  );
}
