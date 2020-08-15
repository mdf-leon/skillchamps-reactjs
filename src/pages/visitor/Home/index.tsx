import React from 'react';
// import History from 'react-history';

const Home = (props) => { // rsc
  // const history = new History();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => props.history.push('/login')}>Login</button>
      </header>
    </div>
  );
};

export default Home;