import PropTypes from 'prop-types';
import React from 'react';

import { FaSpinner } from 'react-icons/fa';
import { Button } from './styles';

export default function CustomButton({
  profile,
  children,
  htmlType,
  isLoading,
  isDisabled,
  width,
  ...rest
}) {
  return (
    <Button
      isLoading={isLoading}
      type={htmlType}
      isDisabled={isDisabled || isLoading}
      width={width}
      profile={profile}
      {...rest}
    >
      {isLoading ? <FaSpinner size={14} /> : children}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  isDisabled: PropTypes.bool,
  htmlType: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  profile: PropTypes.string,
  width: PropTypes.string,
};

CustomButton.defaultProps = {
  isDisabled: false,
  htmlType: '',
  isLoading: false,
  onClick: undefined,
  profile: '',
  width: '',
};
