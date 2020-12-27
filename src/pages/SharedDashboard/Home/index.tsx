import React, { useState, useEffect } from 'react';
import AppBar from '../../../components/AppBar';
import Message from 'components/Message';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CheckCircle, VisibilityOff, Cancel } from '@material-ui/icons';
import { base } from '../../../config/api';
import { Button, Grid } from '@material-ui/core';
import ConeSVG from 'assets/svg/traffic-cone-svgrepo-com 1.svg';

import { homeStyles } from './styles' 

export default function ManageableEvents(props: any) {
  const classes = homeStyles();  
  // const theme = useTheme();
  const [events, setEvents] = useState<any[]>([]);
  const [hasInstitute, setHasInstitute] = useState<any>(false);

  return (
    <>
      <AppBar title="Dashboard" {...props} />
        <Grid>
          <p>arobado</p>
        </Grid>
    </>
  );
}
