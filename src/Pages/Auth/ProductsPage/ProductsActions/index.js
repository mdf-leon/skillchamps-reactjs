import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import {
  Row,
  Col,
  Button,
  Select,
  Input,
  Table,
  Menu,
  Dropdown,
  Icon
} from "antd"
import Fuse from "fuse.js"

import EditProduct from "./EditProduct"
import NewProduct from "./NewProduct"

import "./styles.css"

import api from "../../../../services/api"
import { getCategoriesRequest } from "../../../../store/modules/category/actions"
import {
  updateCrumb,
  removeCrumb
} from "../../../../store/modules/breadcrumb/actions"

// const options = {
//   threshold: 0,
//   location: 0,
//   minMatchCharLength: 1,
//   keys: ["name"]
// }

const selectOptions = {
  threshold: 0,
  location: 0,
  minMatchCharLength: 1,
  keys: ["category_name"]
}

export default function ProductsList(props) {
  const { Option } = Select

  const [products, setProducts] = useState([])
  const categories = useSelector(state => state.category.categories)
  const [, setSearch] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      updateCrumb("Lista de produtos", `${props.match.url}`, 2, "products")
    )

    return () => {
      dispatch(removeCrumb("products"))
    }
  }, [dispatch, props.match.url])

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("yourmanager/products/all")
      setProducts(response.data)
    }
    getProducts()
  }, [])

  useEffect(() => {
    dispatch(getCategoriesRequest())
    // eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   if (!search) {
  //     if (selectedCategory) {
  //       const fuse = new Fuse(products, selectOptions)
  //       setFilteredProducts(fuse.search(selectedCategory))
  //     } else {
  //       setFilteredProducts(products)
  //     }
  //   } else {
  //     if (selectedCategory) {
  //       const fuse = new Fuse(filteredProducts, options)
  //       setFilteredProducts(fuse.search(search))
  //     } else {
  //       const fuse = new Fuse(products, options)
  //       setFilteredProducts(fuse.search(search))
  //     }
  //   }
  // }, [filteredProducts, products])

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredProducts(products)
    }
    if (selectedCategory === "todos") {
      setFilteredProducts(products)
    } else {
      const fuse = new Fuse(products, selectOptions)
      setFilteredProducts(fuse.search(selectedCategory))
    }
  }, [products, selectedCategory])

  async function handleDelete(id) {
    try {
      await api.delete(`yourmanager/products/delete/${id}`)
    } catch (err) {}

    console.log(id)
    window.location.reload(true)
  }

  const menu = id => (
    <Menu>
      <Menu.Item key="0">
        <Button type="link">
          <Link
            className="text-dark d-flex align-items-center"
            to={`${props.match.url}/update/${id}`}
          >
            <Icon type="edit" />
            <span>Editar produto</span>
          </Link>
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
      title: "Preço",
      key: "price",
      dataIndex: "price"
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

  const data = filteredProducts.map((product, idx) => {
    product.key = idx
    return product
  })

  const component = (
    <>
      <Row justify="space-between" type="flex">
        <Col sm={4}>
          <Select
            className="w-100"
            showSearch
            placeholder="Categoria"
            optionFilterProp="children"
            onChange={e => setSelectedCategory(e)}
            value={selectedCategory}
          >
            <Option key={-1} value={"todos"}>
              Todos
            </Option>
            {categories.map((category, idx) => (
              <Option key={idx} value={category.name}>
                {idx === 0 ? "Sem Categoria" : category.name}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={15} sm={12} md={14} style={{ minWidth: "150px" }}>
          <Input.Search
            placeholder="Buscar pelo nome do produto"
            onSearch={value => setSearch(value)}
          />
        </Col>
        <Col xs={3} sm={0}>
          <Button type="primary">
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
              to={`${props.match.url}/new`}
            >
              +
            </Link>
          </Button>
        </Col>
        <Col style={{ minWidth: "155px" }} xs={0} sm={1}>
          <Button type="primary">
            <Link
              // type="primary"
              style={{ width: "100%" }}
              to={`${props.match.url}/new`}
            >
              Criar novo produto
            </Link>
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
            render={() => "Criar novo produto"}
          />
          <Route
            exact
            path={`${props.match.path}/update/:id`}
            render={() => "Editar produto"}
          />
          <Route
            path={`${props.match.path}`}
            render={() => "Lista de produtos"}
          />
        </Switch>
      </h3>
      <div className="contain">
        <Switch>
          <Route
            exact
            path={`${props.match.path}/new`}
            component={NewProduct}
          />
          <Route
            exact
            path={`${props.match.path}/update/:id`}
            component={EditProduct}
          />
          <Route path={`${props.match.path}`} render={() => component} />
        </Switch>
      </div>
    </>
  )
}
