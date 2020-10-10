import React, { useState } from 'react';
import { Container, Title, TitleText, Body, Page } from './styles';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
const Sidebar = (props) => {
  const history = useHistory(); 
  const [isOpen, setisOpen] = useState<boolean>(false);
  const Icon = isOpen ? MdFormatIndentDecrease : MdFormatIndentIncrease;

  function page(text: string, url: string) {
    return (
      <Page isOpen={isOpen} onClick={() => history.push(url)}>
        {text}
      </Page>
    );
  }

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
        <Page
          isOpen={isOpen}
          onClick={() => {
            localStorage.removeItem('token');
            window.location.reload();
          }}
        >
          - log off
        </Page>
        {page('- landing page', '/')}
        {page('dashboard', '/dashboard')}
        {page('accountOptions', '/accountOptions')}
        {page('createEvent', '/createEvent')}
        {page('x Events', '/Events')}
        {page('x Institute', '/Institute')}
        {page('x ManageEvent', '/ManageEvent')}
        {page('x BeforePoints', '/BeforePoints')}
        {page('Rider', '/Rider')}
      </Body>
    </Container>
  );
};

export default Sidebar;
