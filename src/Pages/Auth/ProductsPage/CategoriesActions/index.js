import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route, Link } from "react-router-dom"
import { Row, Col, Button, Input, Table, Menu, Dropdown, Icon } from "antd"
import Fuse from "fuse.js"

import EditCategory from "./EditCategory"
import NewCategory from "./NewCategory"

import { getCategoriesRequest } from "../../../../store/modules/category/actions"
import api from "../../../../services/api"
import {
  updateCrumb,
  removeCrumb
} from "../../../../store/modules/breadcrumb/actions"

const options = {
  threshold: 0,
  location: 0,
  minMatchCharLength: 1,
  keys: ["name"]
}

export default function CategoriesList(props) {
  const dispatch = useDispatch()

  const categories = useSelector(state => state.category.categories)
  const [search, setSearch] = useState("")
  const [filteredCategories, setFilteredCategories] = useState([])
  // const [open, setOpen] = useState(false)

  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, [dispatch])

  useEffect(() => {
    if (!search) {
      setFilteredCategories(categories)
    } else {
      const fuse = new Fuse(categories, options)
      setFilteredCategories(fuse.search(search))
    }
  }, [categories, search])
  useEffect(() => {
    dispatch(
      updateCrumb("Lista de categorias", `${props.match.url}`, 2, "categories")
    )

    return () => {
      dispatch(removeCrumb("categories"))
    }
  }, [dispatch, props.match.url])

  useEffect(() => {
    if (!search) {
      setFilteredCategories(categories)
    } else {
      const fuse = new Fuse(categories, options)
      setFilteredCategories(fuse.search(search))
    }
  }, [categories, search])

  async function handleDelete(id) {
    try {
      await api.delete(`yourmanager/category/delete/${id}`)
    } catch (err) {}

    window.location.reload(true)
  }

  const menu = id => (
    <Menu>
      <Menu.Item key="0">
        <Button
          className="text-dark d-flex align-items-center"
          type="link"
          href={`${props.match.url}/update/${id}`}
        >
          <Icon type="edit" />
          Editar categoria
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
          Deletar categoria
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
      title: "Imagem",
      dataIndex: "img",
      key: "img"
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

  const data = filteredCategories.map((category, idx) => {
    category.key = idx
    return category
  })

  const component = (
    <>
      <Row justify="space-between" type="flex">
        <Col xs={20} sm={12} md={18} style={{ minWidth: "150px" }}>
          <Input.Search
            placeholder="Buscar pelo nome da categoria"
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
            <Link to={`${props.match.url}/new`}>Criar nova categoria</Link>
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
            render={() => "Criar nova categoria"}
          />
          <Route
            exact
            path={`${props.match.path}/update/:id`}
            render={() => "Editar categoria"}
          />
          <Route
            path={`${props.match.path}`}
            render={() => "Lista de categorias"}
          />
        </Switch>
      </h3>
      <div className="contain">
        <Switch>
          <Route
            exact
            path={`${props.match.path}/new`}
            component={NewCategory}
          />
          <Route
            exact
            path={`${props.match.path}/update/:id`}
            component={EditCategory}
          />
          <Route path={`${props.match.path}`} render={() => component} />
        </Switch>
      </div>
    </>
  )
}
