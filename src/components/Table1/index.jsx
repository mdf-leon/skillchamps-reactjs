import PropTypes from "prop-types";
import React from "react";
import { FaSpinner } from "react-icons/fa";

import { Grid } from "styles/grid";
import { Table, LoadingContainer, Col, Row } from "./styles";

export default function CustomTable(props) {
  // eslint-disable-next-line react/prop-types
  const { columns, sm, data, isLoading, onOrderChange, ...rest } = props;
  function renderRow(item) {
    return (
      <Grid fluid key={`grid${item.id}`}>
        <Row key={item.id}>
          {columns.map(({ title, dataIndex, width, align, render }, index) => (
            <Col
              xs
              key={`${item.id} - ${title} - ${dataIndex}`}
              style={{
                width,
                textAlign: align,
              }}
            >
              {render ? (
                <tr>{render("text", item, index)}</tr>
              ) : (
                <tr>
                  <span>{item[dataIndex]}</span>
                </tr>
              )}
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }



  // (
  //   // <Grid fluid>
  //     {/* <Row> */}

  //     {/* </Row> */}
  //   {/* </Grid> */}
  // );

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
              {columns.map(({ title }) => {
                return (
                  <td>
                    <Col xs key={title}>
                      {title}
                    </Col>
                  </td> 
                );
              })}
            </tr>
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
