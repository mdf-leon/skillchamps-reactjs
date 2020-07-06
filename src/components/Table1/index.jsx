import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { ReactComponent as None } from '../../assets/images/None.svg';
import { ReactComponent as Decreasing } from '../../assets/images/Decreasing.svg';
import { ReactComponent as Increasing } from '../../assets/images/Increasing.svg';

import { Table, LoadingContainer, Button, StatusCol, Col, Row, } from './styles';

export default function CustomTable(props) {
  // eslint-disable-next-line react/prop-types
  const { columns, sm, data, isLoading, onOrderChange, ...rest } = props
  const [direction, setdirection] = useState('asc')
  const [columnSort, setcolumnSort] = useState('')
  function renderRow(item) {
    return (
      <Row key={item.id}>
        {columns.map(({ title, dataIndex, width, align, render }, index) => (
          <Col xs
            key={`${item.id} - ${title} - ${dataIndex}`}
            style={{
              width,
              textAlign: align,
            }}
          >
            {render ? (
              <div>{render('text', item, index)}</div>
            ) : (
                <div>
                  <span>{item[dataIndex]}</span>
                </div>
              )}
          </Col>
        ))}
      </Row>
    );
  }

  const handleOnOrderChange = (e, dataIndex) => {
    e.preventDefault()
    setdirection(direction === 'asc' ? 'desc' : 'asc')
    setcolumnSort(dataIndex)
    onOrderChange(dataIndex, direction)
    // console.log(dataIndex+' '+direction)
  };

  const renderTitle = (Title) => {
    if (typeof Title === 'string') return Title;
    return <Title />;
  };
  const renderSort = (dataIndex) => {
    if (dataIndex === columnSort) {
      return direction === 'asc' ? <Increasing /> : <Decreasing />;
    }
    return dataIndex === 'DropDownRender' ? null : <None />;
  };

  return (
    <Table isLoading={isLoading || !data} {...rest}>
      {isLoading || !data ? (
        <LoadingContainer>
          <FaSpinner size={14} />
        </LoadingContainer>
      ) : (
          <>
            <thead>
              <Row>
                {columns.map(({ title, width, align, dataIndex, }) => {
                  return (
                    <Col xs>
                      {title}
                    </Col>
                  );
                })}
              </Row>
            </thead>
            <tbody>{data.map(renderRow)}</tbody>
          </>
        )}
    </Table>
  );
}

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.node,
      ]),
      dataIndex: PropTypes.string,
      width: PropTypes.string,
      align: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
};

CustomTable.defaultProps = {
  isLoading: false,
  data: undefined,
};
