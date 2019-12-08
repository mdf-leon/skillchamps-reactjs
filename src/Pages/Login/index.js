import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Form, Col, Card, Input, Button, Icon, Checkbox } from "antd"

import { signInRequest } from "../../store/modules/auth/actions"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const loading = useSelector(state => state.auth.loading)

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(signInRequest(email, password))
  }

  return (
    <Row align="middle" type="flex" justify="center" style={{ height: "100%" }}>
      <Col>
        <Card>
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                type="text"
                placeholder="Informe o seu email"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
                type="password"
                placeholder="Digite a sua senha"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                loading={loading}
              >
                Entrar
              </Button>
              <Checkbox>Lembrar conta</Checkbox>
            </Form.Item>
            <Form.Item>
              <a style={{ marginRight: 30 }} href="/forgotpassword">
                Esqueci minha senha
              </a>
              <a href="/register">Registre-se aqui</a>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}
