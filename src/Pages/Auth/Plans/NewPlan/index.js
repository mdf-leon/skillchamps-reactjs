import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Form,
  Input,
  InputNumber,
  Layout,
  Button,
  Select,
  Checkbox
} from "antd"

import "./styles.css"

import { createPlanRequest } from "../../../../store/modules/plans/actions"
import {
  updateCrumb,
  removeCrumb
} from "../../../../store/modules/breadcrumb/actions"

export default function NewPlan(props) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [setupPrice, setSetupPrice] = useState("")
  const [gracePeriod, setGracePeriod] = useState("")
  const [tolerancePeriod, setTolerancePeriod] = useState("")
  const [duration, setDuration] = useState("")
  const [interval, setIntervalCharge] = useState("")
  const [frequency, setFrequency] = useState("")
  const [paymentMethods, setPaymentMethods] = useState([])

  const loading = useSelector(state => state.plans.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      updateCrumb("Criar novo plano", `${props.match.url}`, 2, "newPlan")
    )

    return () => {
      dispatch(removeCrumb("newPlan"))
    }
    // eslint-disable-next-line
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(
      createPlanRequest(
        name,
        description,
        price,
        setupPrice,
        gracePeriod,
        tolerancePeriod,
        duration,
        interval,
        frequency,
        "BRL",
        paymentMethods
      )
    )
  }

  const checkboxOptions = [
    {
      label: "Cartão de crédito",
      value: "credit"
    },
    {
      label: "Boleto",
      value: "boleto"
    }
  ]

  const options = [
    {
      value: "daily",
      name: "Diário"
    },
    {
      value: "weekly",
      name: "Semanal"
    },
    {
      value: "monthly",
      name: "Mensal"
    },
    {
      value: "annually",
      name: "Anual"
    }
  ]

  return (
    <Form className="layout" onSubmit={handleSubmit}>
      <Form.Item>
        <Layout.Content>
          <label className="label_title">Nome: </label>
          <Input
            value={name}
            disabled={loading}
            onChange={e => setName(e.currentTarget.value)}
            type="text"
            placeholder="Informe o nome do plano"
          />
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Layout.Content>
          <label className="label_title">Descrição: </label>
          <Input.TextArea
            disabled={loading}
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
            placeholder="Informe uma breve descrição do plano"
          />
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Layout.Content className="column_content">
          <label className="label_title">Preço do plano: </label>
          <InputNumber
            formatter={value =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/R\$\s?|(,*)/g, "")}
            disabled={loading}
            value={price}
            onChange={num => setPrice(num)}
            placeholder="Informe o preço do plano"
          />
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Layout.Content className="column_content">
          <label className="label_title">Taxa inicial do plano: </label>
          <InputNumber
            disabled={loading}
            formatter={value =>
              `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={value => value.replace(/R\$\s?|(,*)/g, "")}
            value={setupPrice}
            onChange={num => setSetupPrice(num)}
            placeholder="Informe a taxa para iniciar um plano"
          />
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Layout.Content className="column_content">
          <label className="label_title">Métodos de pagamento:</label>
          <Checkbox.Group
            disabled={loading}
            options={checkboxOptions}
            onChange={value => setPaymentMethods(value)}
          />
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <label className="label_title">Período de carência: </label>
        <Layout.Content>
          <InputNumber
            disabled={loading}
            value={gracePeriod}
            onChange={num => setGracePeriod(num)}
            placeholder="Informe o período de carência do plano"
          />
          <label style={{ marginLeft: "10px" }}>dias</label>
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <label className="label_title">Período de tolerância: </label>
        <Layout.Content>
          <InputNumber
            disabled={loading}
            value={tolerancePeriod}
            onChange={num => setTolerancePeriod(num)}
            placeholder="Informe o período de tolerância em caso de falhas"
          />
          <label style={{ marginLeft: "10px" }}>dias</label>
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <label className="label_title">Período de duração: </label>
        <Layout.Content>
          <InputNumber
            disabled={loading}
            value={duration}
            onChange={num => setDuration(num)}
            placeholder="Informe o período de duração do plano em relação à frequência escolhida"
          />
          <label style={{ marginLeft: "10px" }}>dias</label>
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Layout.Content>
          <label className="label_title">Intervalo: </label>
          <Input.TextArea
            disabled={loading}
            value={interval}
            onChange={e => setIntervalCharge(e.currentTarget.value)}
            placeholder="Informe o intervalo entre frequência de cobrança"
          />
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Layout.Content>
          <label className="label_title">Frequência: </label>
          <Select
            disabled={loading}
            // value={frequency}
            onChange={f => setFrequency(f)}
            placeholder="Informe a frequência que o plano será cobrado"
          >
            {options.map((option, idx) => (
              <Select.Option key={idx} value={option.value}>
                {option.name}
              </Select.Option>
            ))}
          </Select>
        </Layout.Content>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Criar plano
        </Button>
      </Form.Item>
    </Form>
  )
}
