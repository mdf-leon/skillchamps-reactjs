import React from 'react';
import PropTypes from 'prop-types';
import DataLength from './DataLength';
import Pagination from './Pagination';

import { Container } from './styles';

export default function TableControl({
  totalRecords,
  pageLimit,
  pageNeighbours,
  onPageChanged,
}) {
  return (
    <Container>
      <DataLength length={totalRecords} />
      <Pagination
        totalRecords={totalRecords}
        pageLimit={pageLimit}
        pageNeighbours={pageNeighbours}
        onPageChanged={onPageChanged}
      />
    </Container>
  );
}

TableControl.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func.isRequired,
};

TableControl.defaultProps = {
  pageNeighbours: 0,
  pageLimit: 30,
};
