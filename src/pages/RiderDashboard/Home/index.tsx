import React from 'react';
import AppBar from '../../../components/AppBar';
import { Grid, Hidden } from '@material-ui/core';

import MobileView from './Mobile';
import DesktopView from './Desktop';

// import { base } from 'config/api';

export default function SharedDashboardHome(props: any) {

  // TODO: pegar se o usuario tem algum evento pra gerir de alguma forma
  //  // const [hasManageableEvents, sethasmanageableEvents] = React.useState<any>(null)

  return (
    <div style={{ maxHeight: '100%', minHeight: '100%', overflowX: 'hidden' }}>
      <AppBar title="Rider's Dashboard" hasManageableEvents {...props} />
      <Grid container style={{ height: 'calc(100% - 64px)' }}>
        <Hidden smUp>
          {/* only shows on mobile (not-sm and above it)*/}
          <MobileView {...props} />
        </Hidden>
        <Hidden xsDown>
          {/* only shows on desktop (sm or bigger)*/}
          <DesktopView appBarHeight={64} {...props} />
        </Hidden>
      </Grid>
    </div>
  );
}

// grid method
// {/* <Grid xs={12} md={6}>
//   <p>adsf</p>
// </Grid>
// <Grid xs={12} md={6}>
//   <p>adsf</p>
// </Grid> */}
