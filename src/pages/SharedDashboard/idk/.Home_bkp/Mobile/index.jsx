import React from 'react';

import TabNav from 'components/TabNav/index';

import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  Typography,
  Divider,
} from '@material-ui/core';

import {
  CardHeader,
} from '../Desktop/styles';

import SubscribedEvents from '../LocalComponents/SubscribedEvents';
import RiderContent from '../LocalComponents/RiderContent';
import HistoryContent from '../LocalComponents/HistoryContent';

const useStyles = makeStyles((theme ) =>
  createStyles({
    mainDiv: {
      overflow: 'hidden',
    },
    root: {
      flexGrow: 1,
      margin: '18px 8px 0 8px',
    },
    historyContent: {
      overflow: 'auto',
    },
  })
);


export default function MobileHome(props ) {
  
  function testBody(str) {
    return <div>{str}</div>;
  }
  
  const classes = useStyles();
  
  const OverView = (
    <div id="overview-main">
      <Card
        className={classes.root}
        style={{ margin: '0', paddingTop: '15px' }}
      >
        <RiderContent {...props}/>
      </Card>
      
      <Card className={classes.root} style={{ marginBottom: '15px' }}>
        <CardHeader>
          <Typography gutterBottom variant="h5" component="h2">
            History
          </Typography>
          <Divider />
          </CardHeader>
        <CardContent className={classes.historyContent}>
          <HistoryContent />
        </CardContent>
        </Card>
        </div>
        );
        
        const EventsView = <SubscribedEvents {...props} />;
  
        return (
    <>
      <TabNav
        tabList={[
          { label: 'Overview', body: testBody(OverView) },
          { label: 'Subscriptions', body: testBody(EventsView) },
          { label: 'Manager', body: testBody('TODO') },
        ]}
        />
    </>
  );
}

// const classes = homeStyles();
// const styles = {
//   tabs: {
//     background: '#fff',
//   },
//   slide: {
//     padding: 15,
//     minHeight: 100,
//     color: '#fff',
//   },
//   slide1: {
//     backgroundColor: '#FEA900',
//   },
//   slide2: {
//     backgroundColor: '#B3DC4A',
//   },
//   slide3: {
//     backgroundColor: '#6AC0FF',
//   },
// };
// const theme = useTheme();
// const [events, setEvents] = React.useState<any[]>([]);
// const [hasInstitute, setHasInstitute] = React.useState<any>(false);

// muda o valor da aba atual
// const [tabIndex, settabIndex] = React.useState<any>(0);