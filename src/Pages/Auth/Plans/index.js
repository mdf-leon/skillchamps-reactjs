import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route, Link } from "react-router-dom"
import { Row, Col, Dropdown, Icon, Button, Menu, Input, Table } from "antd"
import Fuse from "fuse.js"

import NewPlan from "./NewPlan"

import {
  updateCrumb,
  removeCrumb
} from "../../../store/modules/breadcrumb/actions"
import EditPlan from "./EditPlan"
import api from "../../../services/api"

const options = {
  threshold: 0,
  location: 0,
  minMatchCharLength: 1,
  keys: ["name"]
}

export default function Plans(props) {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const [filteredPlans, setFilteredPlans] = useState([])
  const [plans, setPlans] = useState([])

  useEffect(() => {
    dispatch(updateCrumb("Planos", `${props.match.url}`, 1, "plans"))

    return () => {
      dispatch(removeCrumb("plans"))
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    async function getPlans() {
      const response = await api.get("/yourmanager/planos/all")

      setPlans(response.data)
    }

    getPlans()
  }, [])

  useEffect(() => {
    if (!search) {
      setFilteredPlans(plans)
    } else {
      const fuse = new Fuse(plans, options)
      setFilteredPlans(fuse.search(search))
    }
  }, [plans, search])

  async function handleDelete(id) {
    try {
      await api.delete(`yourmanager/planos/delete/${id}`)
      window.location.reload(true)
    } catch (err) {}
  }

  const menu = id => (
    <Menu>
      <Menu.Item key="0">
        <Button
          className="text-dark d-flex align-items-center"
          type="link"
          href={`/plans/update/${id}`}
        >
          <Icon type="edit" />
          Editar produto
        </Button>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Button
          className="text-dark d-flex align-items-center"
          type="link"
          href={null}
          onClick={() => handleDelete(id)}
        >
          <Icon type="delete" />
          Deletar produto
        </Button>
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Descrição",
      key: "description",
      dataIndex: "description"
    },
    {
      title: "Preço",
      key: "price",
      dataIndex: "amount"
    },
    {
      title: "Frequência",
      key: "frequency",
      dataIndex: "frequency"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => (
        <Dropdown overlay={() => menu(record.id)} trigger={["click"]}>
          <Button type="link">
            <Icon type="more" />
          </Button>
        </Dropdown>
      )
    }
  ]

  const data = filteredPlans.map((plan, idx) => {
    plan.key = idx
    return plan
  })

  const component = (
    <>
      <Row justify="space-between" type="flex">
        <Col xs={20} sm={12} md={18} style={{ minWidth: "150px" }}>
          <Input.Search
            placeholder="Buscar pelo nome do plano"
            onSearch={value => setSearch(value)}
          />
        </Col>
        <Col xs={3} sm={0}>
          <Button
            type="primary"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Link to={`${props.match.url}/new`}>+</Link>
          </Button>
        </Col>
        <Col style={{ minWidth: "155px" }} xs={0} sm={1} md={4}>
          <Button type="primary" style={{ width: "100%" }}>
            <Link to={`${props.match.url}/new`}>Criar novo plano</Link>
          </Button>
        </Col>
      </Row>
      <Row className="mt-5" style={{ overflowY: "hidden" }}>
        <Table columns={columns} dataSource={data} />
      </Row>
    </>
  )

  return (
    <>
      <h3>
        <Switch>
          <Route
            exact
            path={`${props.match.path}/new`}
            render={() => "Criar novo plano"}
          />
          <Route
            exact
            path={`${props.match.path}/update/:id`}
            render={() => "Editar novo plano"}
          />
          <Route
            path={`${props.match.path}`}
            render={() => "Lista de planos"}
          />
        </Switch>
      </h3>
      <div className="contain">
        <Switch>
          <Route exact path={`${props.match.path}/new`} component={NewPlan} />
          <Route
            exact
            path={`${props.match.path}/update/:id`}
            component={EditPlan}
          />
          <Route path={`${props.match.path}`} render={() => component} />
        </Switch>
      </div>
    </>
  )
}
