import React, { useState } from 'react';
import { Row, Col, Grid } from 'styles/grid'

export default function BTable(props) {
  // eslint-disable-next-line react/prop-types
  const { columns, data } = props

  return (
    <div style={{ display: "flex" }}>
      <Grid>
        {/* head */}
        <Row style={{ border: "1px solid black" }}>
          {columns.map(({ title }) => {
            return (
              <Col xs>
                {title}
              </Col>
            );
          })}
        </Row>
        {/* body */}
        <Row>
        </Row>
      </Grid>
    </div>
  );
}