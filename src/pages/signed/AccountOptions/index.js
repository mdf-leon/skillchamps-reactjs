import React, { useState } from 'react';
import Sidebar from '../../../components/navbar/sidebar'
import { Link } from 'react-router-dom';

import { base } from '../../../config/api'
import { Card, Icon, Button, Row, Col } from 'antd';

export default function AccountOptions(props) {

    const [user, setUser] = useState({})

    const userDetails = (
        <Card style={{ width: "50%" }}>
            <Row style={{display: "flex"}}>
                <Col span={5} style={{textAlign: "center"}}>
                    <Button type="circle" icon="apple" />
                </Col>
                <Col span={12} style={{alignSelf: "center"}}>
                    <div >
                        <h5 style={{marginBottom: 0, textAlign: "center"}}
                        >User name</h5>
                    </div>
                    
                </Col>
            </Row>
        </Card>
    )

    return (
        <div style={{ height: "100%" }}>
            <Sidebar SeleKey={['2']} />


            <div style={{ marginLeft: 50, marginRight: 50 }} className="container justify-content-center align-items-center d-flex h-100">
                <Row className="container h-100 d-flex mx-5">
                    <div style={{ margin: 0 }} className="my-auto w-100">
                        {userDetails}
                    </div>
                </Row>


            </div>


        </div>

    )
}