import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button, TextInput, Modal } from 'components';
import { Row, Col } from 'styles/grid'
import { Card } from './styles'
import { base } from "../../../config/api";


export default function Teste(props) {
  const history = useHistory();

  const successMessage = (
    <div>
      <h4 style={{color: "rgba(0, 0, 0, 0.65)", fontSize: "26px"}}>Successfully created Rider</h4>
      <p style={{color: "rgba(0, 0, 0, 0.65)",}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Button style={{marginTop: "20px"}} onClick={() => history.push('/AccountOptions')} width="100%">Ok</Button>
    </div>
  )

  const [renderModal, setrenderModal] = useState(false)

  const [fData, setFData] = useState({
    name: "",
    date_of_birth: "",

    motorcycle: "",
    motorcycle_plate: "",
    license_ido: "",

    fed_tax_ido: "",
    subd_tax_ido: "",
    city_tax_ido: ""
  });

  const handleSubmit = e => {
    e.preventDefault()
    // console.log(jwt)
    //let res = await base.post("/makerider", fData).catch(e => console.log(e.Error))
    // base.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    // base.setHeader('Access-Control-Allow-Credentials',true);
    base
      .post("/makerider", fData,)
      .then(r => {
        console.log(r)
        setrenderModal(true)
      })
      .catch(e => {
        console.log(e.response);
      });
    console.log(fData);
  };

  return (

    <Row
      className="container h-100 d-flex justify-content-center"
      style={{ alignItems: "center" }}
    >
      <Modal show={renderModal} content={successMessage}/>
      <Card>
        <form onSubmit={handleSubmit}>
          <h3>Register Rider</h3>
          <Row>
            <Col lg={12}>
              <TextInput
                label="Name"
                placeholder="Joh Wheelies"
                value={fData.name}
                onChange={e => setFData({ ...fData, name: e.target.value })}
              />
            </Col>
            <Col xs={12} md={6}>
              <TextInput label="Birthdate" placeholder="YYYY-MM-DD"
                onChange={(e) =>
                  setFData({ ...fData, date_of_birth: e.target.value })}
              />
            </Col>
            <Col xs={12} md={6}>
              <TextInput label="Motorcycle Plate" placeholder="M0Z7482"
                value={fData.motorcycle_plate}
                onChange={e =>
                  setFData({ ...fData, motorcycle_plate: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={9}>
              <TextInput label="Motorcycle Description" placeholder="Harley Davidson Fat Bob 2007"
                value={fData.motorcycle}
                onChange={e => setFData({ ...fData, motorcycle: e.target.value })}
              />
            </Col>
            <Col sm={12} md={3}>
              <TextInput label="License Identification" placeholder="18972558956 (license_ido)"
                value={fData.license_ido}
                onChange={e =>
                  setFData({ ...fData, license_ido: e.target.value })
                }
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <TextInput label="Fed_tax_ido" placeholder="USA"
                value={fData.fed_tax_ido}
                onChange={e =>
                  setFData({ ...fData, fed_tax_ido: e.target.value })
                }
              />
            </Col>

            <Col sm={12}>
              <TextInput label="Subd_tax_ido" placeholder="Maryland"
                value={fData.subd_tax_ido}
                onChange={e =>
                  setFData({ ...fData, subd_tax_ido: e.target.value })
                }
              />
            </Col>

            <Col sm={12}>
              <TextInput label="City_tax_ido" placeholder="City"
                value={fData.city_tax_ido}
                onChange={e =>
                  setFData({ ...fData, city_tax_ido: e.target.value })
                }
              />
            </Col>
          </Row>
          <div style={{ marginTop: "20px" }}>
            <Button type={'submit'}>Submit</Button>
          </div>
        </form>
      </Card>
    </Row>
  );
}
