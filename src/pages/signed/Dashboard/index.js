import React from "react";
import { Container, Row, Column } from "styles/grid2";


export default function Dashboard(props) {

  return (
    <div>
      <Container title="asfgbwsraqg">
        <Row>
          <Column mobile="4" tablet="12" desktop="5" >
            <button onClick={()=>{localStorage.removeItem('token')}}>Deslogar</button>
          </Column>
          <Column mobile="2" tablet="12" desktop="5" >
            <span>teste2</span>
          </Column>
        </Row>
        <Row>
          <Column mobile="4" tablet="12" desktop="5" >
            <div>teste1</div>
          </Column>
          <Column mobile="2" tablet="12" desktop="5" >
            <span>teste2</span>
          </Column>
        </Row>
      </Container>
    </div>

  );
}
