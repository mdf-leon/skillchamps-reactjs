import React, { useState } from 'react';
// import History from 'react-history';
import { IconButton, SelectedTab } from './styles';

export default function TabPage(props) {
  const [tab, settab] = useState(0);

  const tabText = () => {
    switch (tab) {
      case 1:
        return <SelectedTab>
          Made to fit your phone and to give you power to do anything, anywhere.
        </SelectedTab>;
      case 2:
        return <SelectedTab>Just as your Harley</SelectedTab>;
      case 3:
        return <SelectedTab>We help you organize your event without needing a big loan.</SelectedTab>;
      default:
        return <SelectedTab>
          Intuitive and easy to navigate between pages to get things done.
        </SelectedTab>;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <IconButton selected={tab === 0} onClick={(e) => settab(0)}>
          Easy
        </IconButton>
        <IconButton selected={tab === 1} onClick={(e) => settab(1)}>
          Simple
        </IconButton>
        <IconButton selected={tab === 2} onClick={(e) => settab(2)}>
          Fast
        </IconButton>
        <IconButton selected={tab === 3} onClick={(e) => settab(3)}>
          Cheap
        </IconButton>
      </div>
      <div
        style={{
          border: '3px solid #ad0b26',
          borderRadius: '4px',
          marginLeft: '4px',
          marginRight: '4px',
          marginTop: '0px',
        }}
      >{tabText()}</div>
    </div>
  );
}
