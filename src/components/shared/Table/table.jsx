import PropTypes from 'prop-types';
import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Table, LoadingContainer } from './styles';

export default function CustomTable({ columns, data, isLoading, ...rest }) {
  function renderRow(item) {
    return (
      <tr key={item.id}>
        {columns.map(({ title, dataIndex, width, align, render }, index) => (
          <td
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
          </td>
        ))}
      </tr>
    );
  }

  const renderTitle = (Title) => {
    if (typeof Title === 'string') return Title;
    return <Title />;
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
            <tr>
              {columns.map(({ title, width, align }) => {
                return (
                  <th
                    key={title}
                    style={{
                      width,
                      textAlign: align,
                    }}
                  >
                    {renderTitle(title)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>{data?.map(renderRow)}</tbody>
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
      dataIndex: PropTypes.string.isRequired,
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
