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
        <Card className={bodyClassName}>{content || children}</Card>
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
  show: PropTypes.bool,
};

Modal.defaultProps = {
  onBackgroundClick: () => undefined,
  content: undefined,
  children: undefined,
  containerClassName: '',
  bodyClassName: '',
  show: true,
};
