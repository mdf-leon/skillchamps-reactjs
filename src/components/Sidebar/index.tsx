import React, { useState } from 'react';
import { Container, Title, TitleText, Body } from './styles';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from 'react-icons/md';

const Sidebar = (props) => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const Icon = isOpen ? MdFormatIndentDecrease : MdFormatIndentIncrease;
  return (
    <Container isOpen={isOpen} id="container">
      <Title onClick={() => setisOpen(!isOpen)} isOpen={isOpen} id="title">
        <TitleText isOpen={isOpen}>{props.title}</TitleText>
        <Icon
          size={24}
          style={isOpen ? { marginLeft: 'auto' } : { margin: 'auto' }}
        />
      </Title>
      <Body isOpen={isOpen}>

      </Body>
    </Container>
  );
};

export default Sidebar;
