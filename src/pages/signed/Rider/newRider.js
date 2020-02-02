import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Card,
  Steps,
  Row,
  DatePicker,
  Button,
  Icon,
  Col,
  Avatar,
  Select,
  List,
  Checkbox,
  Descriptions,
  Spin
} from "antd";
import { base } from "../../../config/api";
import {
  //withCookies, Cookies,
  useCookies
} from "react-cookie";

export default function Teste(props) {
  const [cookies] = useCookies("jwt");

  useEffect(() => {
    base
      .get(`/showrider`, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        base
          .get(`/showinstitute`, {
            headers: { Authorization: `Bearer ${cookies.jwt}` }
          })
          .then(r => {
            setUserInstitute(r.data);
            setLoading(false);
          })
          .catch(e => {
            setStep(3);
            getList(1);
          });
        setUserRider(r.data);
      })
      .catch(e => {
        setLoading(false);
      });
  }, []);

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const [inputColumn, setInputColumn] = useState("name");
  const [inputValue, setInputValue] = useState("");

  const [instituteList, setInstituteList] = useState({
    total: 0,
    perPage: 20,
    page: 1,
    lastPage: 0,
    data: []
  });

  const [instituteRequest, setInstituteRequest] = useState([]);
  const [requestPage, setRequestPage] = useState(1);

  const [userInstitute, setUserInstitute] = useState();
  const [userRider, setUserRider] = useState();

  const showStep = () => {
    switch (step) {
      case 0:
        return firstStep;
      case 1:
        return secondStep;
      case 2:
        return thirdStep;
      case 3:
        return fourthStep;
      default:
        return "we";
    }
  };

  const getList = page => {
    base
      .get(
        `/instituteslist?column=${inputColumn}&value=${inputValue}&page=${page}&limit=10`,
        {
          headers: { Authorization: `Bearer ${cookies.jwt}` }
        }
      )
      .then(r => {
        setInstituteList(r.data);

        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    // console.log(jwt)
    //let res = await base.post("/makerider", fData).catch(e => console.log(e.Error))
    // base.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    // base.setHeader('Access-Control-Allow-Credentials',true);
    base
      .post("/makerider", fData, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {
        setStep(3);
        getList(1);
      })
      .catch(e => {
        console.log(e.response);
      });
    console.log(fData);
  };

  const handleSubmitRequest = () => {
    base
      .post("/bind", fData, {
        headers: { Authorization: `Bearer ${cookies.jwt}` }
      })
      .then(r => {})
      .catch(e => {
        console.log(e.response);
      });
    console.log(fData);
  };

  const handleColumn = e => {
    setInputColumn(e);
  };

  const handleValue = e => {
    setInputValue(e.target.value);
  };

  const handleChecks = e => {
    if (!e.target.checked) {
      let il = instituteRequest;
      setInstituteRequest(il.filter(i => i != e.target.id));
    } else {
      setInstituteRequest([...instituteRequest, e.target.id]);
    }
  };
  const firstStep = (
    <Row style={{ width: "100%" }} className="my-auto">
      <Card>
        <Form //onSubmit={handleSubmit}
        >
          <Form.Item label="Name">
            <Input
              value={fData.name}
              placeholder="John Wheelies"
              onChange={e => setFData({ ...fData, name: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Birthdate">
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Birthdate in Month/Day/Year"
              format="MM/DD/YYYY"
              onChange={(e, dd) =>
                setFData({ ...fData, date_of_birth: e.format("YYYY-MM-DD") })
              }
            />
          </Form.Item>
          <Form.Item>
            {/* <Button type="primary" style={{ float: "left" }}>
                                    <Icon type="left" />
                                    Go back
                                </Button> */}
            <Button
              type="primary"
              style={{ float: "right" }}
              onClick={() => setStep(1)}
            >
              Go forward
              <Icon type="right" />
            </Button>
          </Form.Item>
        </Form>
        {/* <span style={{ color: "gray", float: "right" }}>You can click on the step at the top to go back.</span> */}
      </Card>
    </Row>
  );

  const secondStep = (
    <Row style={{ width: "100%" }} className="my-auto">
      <Card>
        <Form //onSubmit={handleSubmit}
        >
          <Form.Item label="Motorcycle plate">
            <Input
              value={fData.motorcycle_plate}
              placeholder="MOZ7482"
              onChange={e =>
                setFData({ ...fData, motorcycle_plate: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Motorcycle description">
            <Input
              value={fData.motorcycle}
              placeholder="Harley Davidson Fat Bob 2007"
              onChange={e => setFData({ ...fData, motorcycle: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="License identification">
            <Input
              value={fData.license_ido}
              placeholder="189725589456 (license_ido)"
              onChange={e =>
                setFData({ ...fData, license_ido: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type=""
              style={{ float: "left" }}
              onClick={() => setStep(0)}
            >
              <Icon type="left" />
              Go back
            </Button>
            <Button
              type="primary"
              style={{ float: "right" }}
              onClick={() => setStep(2)}
            >
              Go forward
              <Icon type="right" />
            </Button>
          </Form.Item>
        </Form>
        {/* <span style={{ color: "gray", float: "right" }}>You can click on the step at the top to go back.</span> */}
      </Card>
    </Row>
  );

  const thirdStep = (
    <Row style={{ width: "100%" }} className="my-auto">
      <Card>
        <Form //onSubmit={handleSubmit}
        >
          <Form.Item label="fed_tax_ido">
            <Input
              value={fData.fed_tax_ido}
              placeholder="USA"
              onChange={e =>
                setFData({ ...fData, fed_tax_ido: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="subd_tax_ido">
            <Input
              value={fData.subd_tax_ido}
              placeholder="Maryland"
              onChange={e =>
                setFData({ ...fData, subd_tax_ido: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="city_tax_ido">
            <Input
              value={fData.city_tax_ido}
              placeholder="City"
              onChange={e =>
                setFData({ ...fData, city_tax_ido: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button
              type=""
              style={{ float: "left" }}
              onClick={() => setStep(1)}
            >
              <Icon type="left" />
              Go back
            </Button>
            <Button
              type="primary"
              style={{ float: "right" }}
              onClick={() => {
                handleSubmit(3);
              }}
            >
              Go forward
              <Icon type="right" />
            </Button>
          </Form.Item>
        </Form>
        {/* <span style={{ color: "gray", float: "right" }}>You can click on the step at the top to go back.</span> */}
      </Card>
    </Row>
  );
  const fourthStep = (
    <Row style={{ width: "100%", marginBottom: "20px" }} className="my-auto">
      <Card>
        <span>Here you can find institutes open for signup</span>
        <List
          size="large"
          header={
            <>
              <div style={{ display: "flex" }}>
                <div style={{ width: "130px", lineHeight: "30px" }}>
                  Find Institutes:
                </div>
                <Input.Group compact style={{ display: "flex" }}>
                  <Select
                    style={{ width: "25%" }}
                    defaultValue="name"
                    onChange={handleColumn}
                  >
                    <Select.Option value="name">Name</Select.Option>
                    <Select.Option value="id">Id</Select.Option>
                    <Select.Option value="address">Address</Select.Option>
                  </Select>
                  <Input.Search
                    placeholder="search text"
                    enterButton
                    onChange={handleValue}
                    onSearch={() => {
                      setRequestPage(1);
                      getList(1);
                    }}
                  />
                </Input.Group>
              </div>
            </>
          }
          bordered
          dataSource={instituteList.data}
          renderItem={item => (
            <List.Item style={{ height: "50px" }}>
              <Row
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex"
                }}
              >
                <Col span={3}>
                  <Avatar
                    shape="square"
                    icon="user"
                    src="http://www.somervillenj.org/images/imageedit_1_2654230527.jpg"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      float: "left"
                    }}
                  />
                </Col>
                <Col span={8}>
                  <span style={{ lineHeight: "40px" }}>{item.name}</span>
                </Col>
                <Col span={8}>
                  <span style={{ lineHeight: "40px" }}>City - Sp</span>
                </Col>
                <Col span={5}>
                  <Checkbox
                    checked={
                      instituteRequest.some(request => request == item.id)
                        ? true
                        : false
                    }
                    id={item.id.toString()}
                    onChange={handleChecks}
                  ></Checkbox>
                </Col>
              </Row>
            </List.Item>
          )}
          pagination={{
            onChange: page => {
              setRequestPage(page);
              getList(page);
            },
            current: requestPage,
            pageSize: instituteList.perPage,
            total: instituteList.total
          }}
          style={{ margin: "20px 0" }}
        />

        <Button
          type="primary"
          style={{ float: "right" }} //htmlType={"submit"}
          onClick={handleSubmitRequest}
        >
          Finish
          <Icon type="check-circle" />
        </Button>
      </Card>
    </Row>
  );
  return (
    // justify-content

    <Row
      className="container h-100 d-flex justify-content-center"
      style={{ alignItems: "center" }}
    >
      {!loading ? (
        <div style={{ margin: 0, width: "70%" }} className="my-auto">
          {!userRider && !userInstitute ? (
            <>
              <div
                style={{ display: "flex", width: "100%", padding: "26px 0" }}
              >
                <span
                  style={{ width: "195px", fontSize: "20px", fontWeight: 500 }}
                >
                  Create a Rider
                </span>
                <div
                  style={{
                    borderBottom: "1px solid #e8e8e8",
                    width: "100%",
                    marginBottom: "10px"
                  }}
                ></div>
              </div>
              <Row
                style={{ width: "100%", paddingBottom: 35 }}
                className="my-auto"
              >
                <Steps current={step}>
                  <Steps.Step
                    title="The Rider"
                    description="Tell us about you"
                  />
                  <Steps.Step
                    title="The Motorcycle"
                    description="What you ride on?"
                  />
                  <Steps.Step
                    title="Your Address"
                    description="Where are you"
                  />
                  <Steps.Step
                    title="Your Sponsor"
                    description="Find institutes"
                  />
                </Steps>
              </Row>
              {showStep()}
            </>
          ) : !userInstitute ? (
            <>
              <div
                style={{ display: "flex", width: "100%", padding: "26px 0" }}
              >
                <span
                  style={{ width: "195px", fontSize: "20px", fontWeight: 500 }}
                >
                  Find a sponsor
                </span>
                <div
                  style={{
                    borderBottom: "1px solid #e8e8e8",
                    width: "100%",
                    marginBottom: "10px"
                  }}
                ></div>
              </div>
              <Row
                style={{ width: "100%", paddingBottom: 35 }}
                className="my-auto"
              >
                <Steps current={3}>
                  <Steps.Step
                    title="The Rider"
                    description="Tell us about you"
                  />
                  <Steps.Step
                    title="The Motorcycle"
                    description="What you ride on?"
                  />
                  <Steps.Step
                    title="Your Address"
                    description="Where are you"
                  />
                  <Steps.Step
                    title="Your Sponsor"
                    description="Find institutes"
                  />
                </Steps>
              </Row>
              {showStep()}
            </>
          ) : (
            <Card>
              <Descriptions title={userInstitute.name}>
                <Descriptions.Item>
                  {userInstitute.city_tax_ido} - {userInstitute.fed_tax_ido}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          )}
        </div>
      ) : (
        <Spin size="large" />
      )}
    </Row>
  );
}
