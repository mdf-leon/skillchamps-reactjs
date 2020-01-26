import React, { useState } from 'react';
import Sidebar from '../../../components/navbar/sidebar'
import { Link } from 'react-router-dom';
import { //withCookies, Cookies, 
    useCookies
} from 'react-cookie';

import { base } from '../../../config/api'
import { Card, Icon, Button, Row, Col, Form, FormItem, Input } from 'antd';

export default function AccountOptions(props) {

    const [cookies] = useCookies("jwt");

    const [institute, setInstitute] = useState({
        fed_tax_ido: '',
        subd_tax_ido: '',
        city_tax_ido: '',
        name: ''
    })
    const [isBecomingS, setIsBecomingS] = useState(false)

    const becomeInstituteSubmit = async (e) => {
        e.preventDefault()
        let res = await base.post("/makeinstitute", institute,
            { headers: { Authorization: `Bearer ${cookies.jwt}` } }).catch(e => {
                return e.data
            })
        console.log(res)
    }

    const userDetails = (
        <Card>
            <Row style={{ display: "flex" }}>
                <Col span={5} style={{ textAlign: "center" }}>
                    <Button type="circle" icon="apple" />
                </Col>
                <Col span={12} style={{ alignSelf: "center" }}>
                    <div >
                        <h5 style={{ marginBottom: 0, textAlign: "center" }}
                        >User name</h5>
                    </div>

                </Col>
            </Row>
        </Card>
    )

    const instituteDetails = (
        <Card >
            <Row style={{ display: "flex" }}>
                <h5 style={{ marginBottom: 0, textAlign: "center" }}
                >You are not currently sponsored by any institute</h5>
            </Row>
            <Row style={{ marginTop: 15 }}>
                <Col span={12} style={{ textAlign: "end" }}>
                    <Button type="primary"
                        onClick={() => setIsBecomingS(false)}>Request sponsor</Button>
                </Col>
                <Col span={12}>
                    <Button type="link"
                        onClick={() => setIsBecomingS(true)}>or become a sponsor</Button>
                </Col>
            </Row>
        </Card>
    )

    const becomeAsponsor = (
        <Card >
            <Form onSubmit={becomeInstituteSubmit}>
                <Form.Item label="name">
                    <Input placeholder="name"
                        onChange={e => setInstitute({ ...institute, name: e.currentTarget.value })} />
                </Form.Item>
                <Form.Item label="fed_tax_ido">
                    <Input placeholder="fed_tax_ido"
                        onChange={e => setInstitute({ ...institute, fed_tax_ido: e.currentTarget.value })} />
                </Form.Item>
                <Form.Item label="subd_tax_ido">
                    <Input placeholder="subd_tax_ido"
                        onChange={e => setInstitute({ ...institute, subd_tax_ido: e.currentTarget.value })} />
                </Form.Item>
                <Form.Item label="city_tax_ido">
                    <Input placeholder="city_tax_ido"
                        onChange={e => setInstitute({ ...institute, city_tax_ido: e.currentTarget.value })} />
                </Form.Item>
                <Form.Item >
                    <Button type="link" style={{ float: "left" }}>Cancel</Button>
                    <Button type="primary" style={{ float: "right" }}
                        htmlType="submit" >Send</Button>
                </Form.Item>
            </Form>
        </Card>
    )

    return (
        <div style={{ height: "100%" }}>
            <Sidebar SeleKey={['2']} />


            <div style={{ marginLeft: 50, marginRight: 50 }} className="container justify-content-center align-items-center d-flex h-100">
                <Row className="container h-100 d-flex mx-5">
                    <Col style={{ margin: 0 }} className="my-auto w-100">
                        {userDetails}
                    </Col>
                    <Col style={{ margin: 0 }} className="my-auto w-100">
                        {isBecomingS ? becomeAsponsor : instituteDetails}
                    </Col>
                </Row>


            </div>


        </div>

    )
}