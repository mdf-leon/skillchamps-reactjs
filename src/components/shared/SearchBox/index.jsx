import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Container, SButton, STextInput, Icon } from './styles';

export default function SearchBox({ onSearch, ...rest }) {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = () => {
    const { value } = window.event.target;
    setSearchValue(value);
  };

  const handleOnSearch = () => {
    onSearch(searchValue);
  };

  return (
    <Container {...rest}>
      <STextInput
        placeholder="Pesquisar"
        value={searchValue}
        onChange={handleOnChange}
      />
      <SButton htmlType="submit" onClick={handleOnSearch}>
        <Icon />
      </SButton>
    </Container>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
