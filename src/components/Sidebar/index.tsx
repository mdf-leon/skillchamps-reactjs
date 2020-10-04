import React, { useState } from 'react';
import { Container, Title, TitleText } from './styles';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from 'react-icons/md';

const Sidebar = (props) => {

  const [isOpen, setisOpen] = useState<boolean>(false);
  const Icon = isOpen ? MdFormatIndentDecrease : MdFormatIndentIncrease;
  return (
    <Container isOpen={isOpen}>
      <Title isOpen={isOpen}>
        <TitleText isOpen={isOpen}>{props.title}</TitleText>
        <Icon
          size={24}
          style={{ marginLeft: 'auto' }}
          onClick={() => setisOpen(!isOpen)}
        />
      </Title>
    </Container>
  );
};

export default Sidebar;
