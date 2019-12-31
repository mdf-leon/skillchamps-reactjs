import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Card, Input, Form, Checkbox, Icon } from 'antd'
import { Redirect } from 'react-router-dom'

import { base } from '../../../config/api';
import { useCookies } from 'react-cookie';



export default function Login(props) { // hook = function

    const [cookies, setCookie] = useCookies();

    const [fData, setFData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        base.post("/authenticate", fData)
            .then(r => {
                console.log(r)
                setCookie("jwt", r.data.token)
                //window.location.reload()
            }).catch(e => {
                setLoading(false)
                alert(e)
            })
    }

    // return = view (parte visual)
    return ( // <Redirect to="/dashboard" />
        <div className="container justify-content-center align-items-center d-flex h-100">
            <Card>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        <Input
                            onChange={e => setFData({ ...fData, email: e.target.value })}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            onChange={e => setFData({ ...fData, password: e.target.value })}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                        <span className="mx-2" />
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Row>
                            <Button loading={loading} block type="primary"
                                htmlType="submit" className="login-form-button"
                            >
                                Log in
                            </Button>
                        </Row>

                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
