import React from 'react';
// import History from 'react-history';
import { TopBar, HomeButton, AccountButton, Body } from './styles';
import VintageBike from 'assets/images/other/VintageBike.png';
import TabPage from './TabPage';
const Home = (props) => {
  return (
    <div style={{ height: '100%' }}>
      <TopBar>
        <div>
          <HomeButton>SKILLCHAMPS</HomeButton>
          <AccountButton onClick={() => props.history.push('/login')}>
            account
          </AccountButton>
        </div>
      </TopBar>
      <Body>
        <div>
          <img src={VintageBike} style={{ width: '100%' }} />
        </div>
        <header
          style={{ padding: '10px', textAlign: 'center', paddingTop: '0px' }}
        >
          <h2 style={{ color: '#3842a3' }}>
            <strong style={{ color: '#ad0b26' }}>Control</strong> your event
            just like your riders control their{' '}
            <strong style={{ color: '#ad0b26' }}>Motorcycles</strong>
          </h2>
        </header>
        <TabPage />
      </Body>
    </div>
  );
};

export default Home;
