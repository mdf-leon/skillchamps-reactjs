import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper, Header, Body, TabsContainer } from './styles';

export default function ContainerWithTabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(0);
  const tabsLenght = tabs.length;
  const { title, component: Component } = tabs[currentTab];

  const controlCurrentTab = (tabIndex) => {
    const controlledCurrentTab = Math.max(0, Math.min(tabIndex, tabsLenght));
    setCurrentTab(controlledCurrentTab);
  };

  return (
    <ContentWrapper>
      <Header>
        <h1>{title}</h1>
        <TabsContainer>
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            if (currentTab === index)
              return (
                <Icon
                  className="tab-icon active-tab"
                  key={tab.title}
                  onClick={() => controlCurrentTab(index)}
                />
              );
            return (
              <Icon
                className="tab-icon"
                key={tab.title}
                onClick={() => controlCurrentTab(index)}
              />
            );
          })}
        </TabsContainer>
      </Header>
      <Body>
        <Component controlCurrentTab={controlCurrentTab} />
      </Body>
    </ContentWrapper>
  );
}

ContainerWithTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
        .isRequired,
      icon: PropTypes.objectOf(PropTypes.any).isRequired,
    })
  ).isRequired,
};
