import styled from 'styled-components'


export const TopBar = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap');
  
  background-color: white;
  display: flex;
  font-family: 'Big Shoulders Display', cursive;
  text-align: center;
  align-items: center;
  justify-content: center;
  div, header {
    height: 100%
  }
`;

export const Body = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap');
  font-family: 'Big Shoulders Display', cursive;
  height: calc(100% - 40px);
  background-color: #e6d1ab;
`;

export const HomeButton = styled.button`
  height: 40px;
  background: none;
  border: none;
  letter-spacing: 2px;
  font-size: 25px;
`;

// export const AccountButton = styled.button`
//   position: absolute;
//   right: 0;
//   height: 40px;
//   background: none;
//   border: none;
//   font-size: 20px;
// `;

export const AccountButton = styled.button`
  position: absolute;
  right: 0;
  margin: 3px;
  border: 1px solid black ;
  border-radius: 4px;
  /* height: 40px; */
  background: none;
  font-size: 20px;
`;

export const IconButton = styled.button<{ selected?: Boolean }>` 
  margin: 3px;
  border: 2px solid ${(props) => props.selected ? '#ad0b26' : '#acbfe3'} ;
  border-radius: 4px;
  /* height: 40px; */
  background: ${(props) => props.selected ? '#ad0b26' : 'none'};
  color: #acbfe3;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: ${(props) => props.selected ? '-3px' : '#acbfe3'} ;
`;

export const SelectedTab = styled.h3` 
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  color: #3842a3;
  margin: 5px;
`;