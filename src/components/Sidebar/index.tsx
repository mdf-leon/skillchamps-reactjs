import React, { useState } from 'react';
import {
  Container,
  Title,
  TitleText,
  Body,
  Page,
  TitleContainer,
} from './styles';
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = (props) => {
  const history = useHistory();
  const [isOpen, setisOpen] = useState<boolean>(false);
  const Icon = isOpen ? MdFormatIndentDecrease : MdFormatIndentIncrease;

  const dynIcon = (iconName) => {
    // <DynIcon size={24} style={{ margin: '0' }} />
    switch (iconName) {
      case 'gear':
        return <SettingsIcon style={{ margin: '0'}} />;
      default:
        return <div />;
    }
  };

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
        <TitleContainer>
          <Icon size={24} style={{ margin: '0' }} />
          <span>{props.title}</span>
          {dynIcon(props.rightIcon || '')}
        </TitleContainer>
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
        {page('eventOptions', '/eventOptions')}
        {page('accountOptions', '/accountOptions')}
        {page('createEvent', '/createEvent')}
        {page('x Events', '/Events')}
        {page('x Institute', '/Institute')}
        {page('x ManageEvents', '/ManageEvent')}
        {page('ManageableEvent', '/manageableEvents')}
        {page('x BeforePoints', '/BeforePoints')}
        {page('Rider', '/Rider')}
      </Body>
    </Container>
  );
};

export default Sidebar;
