import PropTypes from 'prop-types';
import React from 'react';
import { Card, Blackground } from './styles';

export default function Modal(props) {
  const {
    content,
    show,
    onBackgroundClick,
    children,
    containerClassName,
    bodyClassName,
    bodyStyle,
    noPadding,
  } = props;

  if (show) {
    return (
      <Blackground
        className={containerClassName}
        onClick={(e) => {
          e.preventDefault();
          if (e.currentTarget === e.target) {
            onBackgroundClick(e);
          }
        }}
      >
        <Card
          className={bodyClassName}
          style={bodyStyle}
          onClick={(e) => e.stopPropagation()}
          noPadding={noPadding}
        >
          {content || children}
        </Card>
      </Blackground>
    );
  }
  return null;
}

Modal.propTypes = {
  onBackgroundClick: PropTypes.func,
  content: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.objectOf(PropTypes.string),
  show: PropTypes.bool,
  noPadding: PropTypes.bool,
};

Modal.defaultProps = {
  onBackgroundClick: () => undefined,
  content: undefined,
  children: undefined,
  containerClassName: '',
  bodyClassName: '',
  bodyStyle: undefined,
  show: true,
  noPadding: false,
};
