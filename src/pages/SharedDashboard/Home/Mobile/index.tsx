import React from 'react';

// import AppBarTab from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Box from '@material-ui/core/Box';
import TabNav from 'components/TabNav';

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

export default function ManageableEvents(props: any) {
  // const classes = homeStyles();
  // const theme = useTheme();
  // const [events, setEvents] = React.useState<any[]>([]);
  // const [hasInstitute, setHasInstitute] = React.useState<any>(false);

  // muda o valor da aba atual
  // const [tabIndex, settabIndex] = React.useState<any>(0);

  function testBody(str) {
    return <div>{str}</div>;
  }

  return (
    <>
      <TabNav
        tabList={[
          { label: 'Overview', body: testBody('aaa') },
          { label: 'Events', body: testBody('bbb') },
          { label: 'Manager', body: testBody('ccc') },
        ]}
      />
    </>
  );
}
