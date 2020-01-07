import React, { useState } from 'react'
import { Form, Input, Card, Steps, Row, DatePicker, Button, Icon } from 'antd'
import { base } from '../../../config/api'
import { //withCookies, Cookies, 
    useCookies } from 'react-cookie';


export default function Teste(props) {

    const [cookies] = useCookies("jwt");

    const [step, setStep] = useState(0)

    const [fData, setFData] = useState({
        name: '',
        date_of_birth: '',

        motorcycle: '',
        motorcycle_plate: '',
        license_ido: '',

        fed_tax_ido: '',
        subd_tax_ido: '',
        city_tax_ido: ''
    })

    const showStep = () => {
        switch (step) {
            case 0:
                return firstStep
            case 1:
                return secondStep
            case 2:
                return thirdStep
            default:
                return "we"
        }
    }

    const handleSubmit = async () => {
        // console.log(jwt)
        //let res = await base.post("/makerider", fData).catch(e => console.log(e.Error))
        // base.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        // base.setHeader('Access-Control-Allow-Credentials',true);
        base.post("/makerider", fData, {headers: {Authorization : `Bearer ${cookies.jwt}`}})
            .then(r => {
                console.log(r)
            }).catch(e => {
                console.log(e.response)
            })
        console.log(fData)
    }

    const firstStep = (
        <Row style={{ width: "100%" }} className="my-auto">
            <Card>
                <Form //onSubmit={handleSubmit}
                >
                    <Form.Item label="Name">
                        <Input placeholder="John Wheelies" 
                        onChange={(e) => setFData({...fData, name: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="Birthdate">
                        <DatePicker style={{ width: '100%' }} placeholder="Birthdate in Month/Day/Year"
                            format="MM/DD/YYYY" onChange={(e, dd) => setFData({...fData, date_of_birth: e.format("YYYY-MM-DD")})} />
                    </Form.Item>
                    <Form.Item >
                        {/* <Button type="primary" style={{ float: "left" }}>
                                    <Icon type="left" />
                                    Go back
                                </Button> */}
                        <Button type="primary" style={{ float: "right" }}
                        onClick={() => setStep(1)}>
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </Form.Item>
                </Form>
                {/* <span style={{ color: "gray", float: "right" }}>You can click on the step at the top to go back.</span> */}
            </Card>
        </Row>
    )

    const secondStep = (
        <Row style={{ width: "100%" }} className="my-auto">
            <Card>
                <Form //onSubmit={handleSubmit}
                >
                    <Form.Item label="Motorcycle plate">
                        <Input placeholder="MOZ7482" 
                        onChange={(e) => setFData({...fData, motorcycle_plate: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="Motorcycle description">
                        <Input placeholder="Harley Davidson Fat Bob 2007" 
                        onChange={(e) => setFData({...fData, motorcycle: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="License identification">
                        <Input placeholder="189725589456 (license_ido)" 
                        onChange={(e) => setFData({...fData, license_ido: e.target.value})}/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="" style={{ float: "left" }}
                        onClick={() => setStep(0)}>
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary" style={{ float: "right" }}
                        onClick={() => setStep(2)}>
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </Form.Item>
                </Form>
                {/* <span style={{ color: "gray", float: "right" }}>You can click on the step at the top to go back.</span> */}
            </Card>
        </Row>
    )

    const thirdStep = (
        <Row style={{ width: "100%" }} className="my-auto">
            <Card>
                <Form //onSubmit={handleSubmit}
                >
                    <Form.Item label="fed_tax_ido">
                        <Input placeholder="USA" 
                        onChange={(e) => setFData({...fData, fed_tax_ido: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="subd_tax_ido">
                        <Input placeholder="Maryland" 
                        onChange={(e) => setFData({...fData, subd_tax_ido: e.target.value})}/>
                    </Form.Item>
                    <Form.Item label="city_tax_ido">
                        <Input placeholder="City" 
                        onChange={(e) => setFData({...fData, city_tax_ido: e.target.value})}/>
                    </Form.Item>
                    <Form.Item >
                        <Button type="" style={{ float: "left" }}
                        onClick={() => setStep(1)}>
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary" style={{ float: "right" }} //htmlType={"submit"}
                        onClick={handleSubmit}>
                            Finish
                            <Icon type="check-circle" />
                        </Button>
                    </Form.Item>
                </Form>
                {/* <span style={{ color: "gray", float: "right" }}>You can click on the step at the top to go back.</span> */}
            </Card>
        </Row>
    )

    return ( // justify-content
        <Row className="container h-100 d-flex">
            <div style={{ margin: 0 }} className="my-auto w-100">
                <Row style={{ width: "100%", paddingBottom: 35 }} className="my-auto">
                    <Steps current={step}>
                        <Steps.Step title="The Rider" description="Tell us about you" />
                        <Steps.Step title="The Motorcycle" description="What you ride on?" />
                        <Steps.Step title="Where are you" description="(To be: Bind with institute)" />
                    </Steps>
                </Row>
                {showStep()}
            </div>
        </Row>
    )
}