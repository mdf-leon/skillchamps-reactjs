import React from 'react';
import AppBar from '../../../components/AppBar';
// import Message from 'components/Message';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { CheckCircle, VisibilityOff, Cancel } from '@material-ui/icons';
// import { base } from '../../../config/api';
import { Grid, Hidden } from '@material-ui/core';
// import ConeSVG from 'assets/svg/traffic-cone-svgrepo-com 1.svg';

import MobileView from './Mobile';
import DesktopView from './Desktop';

// import { homeStyles } from './styles';

export default function SharedDashboardHome(props: any) {
  // const classes = homeStyles();
  // const theme = useTheme();
  // const [events, setEvents] = React.useState<any[]>([]);
  // const [hasInstitute, setHasInstitute] = React.useState<any>(false);

  // calc(100% - 64px)
  return (
    <div style={{ maxHeight: '100%', minHeight: '100%', overflowX: 'hidden' }}>
      <AppBar title="Dashboard" {...props} />
      <Grid container style={{ height: 'calc(100% - 64px)' }}>
        <Hidden smUp>
          {/* only shows on mobile (not-sm and above it)*/}
          <MobileView />
        </Hidden>
        <Hidden xsDown>
          {/* only shows on desktop (sm or bigger)*/}
          <DesktopView appBarHeight={64}/>
        </Hidden>

        {/* <Grid xs={12} md={6}>
          <p>adsf</p>
        </Grid>
        <Grid xs={12} md={6}>
          <p>adsf</p>
        </Grid> */}
      </Grid>
    </div>
  );
}
