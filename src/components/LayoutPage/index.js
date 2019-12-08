import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Layout, Menu, Icon, Row, Drawer, Avatar, Dropdown } from "antd"
import throttle from "lodash.throttle"

import "antd/dist/antd.css"
import "./styles.css"

import Breadcrumb from "../Breadcrumb"

import { logOutRequest } from "../../store/modules/auth/actions"

const { Header, Sider, Content } = Layout

export default function LayoutPage(props) {
  const [collapsed, setCollapsed] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(0)
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const isMobile = () => viewportWidth < 768

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    const throttledSetViewPortWidth = throttle(() =>
      setViewportWidth(window.innerWidth)
    )
    window.addEventListener("resize", throttledSetViewPortWidth)

    return () => window.removeEventListener("resize", throttledSetViewPortWidth)
  }, [])

  function toggle() {
    setCollapsed(!collapsed)
  }

  function handleLogout() {
    dispatch(logOutRequest())
  }

  const dropDownMenu = (
    <Menu>
      <Menu.Item key="1" className="menu-item">
        <Link to="/settings/profile" className="link">
          <Icon type="edit"></Icon>
          <span className="ml-2">Editar perfil</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2" className="menu-item">
        <Link to="/settings/changepassword" className="link">
          <Icon type="lock" />
          <span className="ml-2">Alterar senha</span>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" className="menu-item">
        <Link to={`${props.match.url}`} onClick={handleLogout} className="link">
          <Icon type="logout" />
          <span className="ml-2">Sair</span>
        </Link>
      </Menu.Item>
    </Menu>
  )

  const menu = (
    <Menu mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/" className="link">
          <Icon type="user" />
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key="2"
        title={
          <span>
            <Icon type="bars" />
            <span>Produtos</span>
          </span>
        }
      >
        <Menu.Item key="3">
          <Link to="/products" className="link">
            <Icon type="shop" />
            <span>Lista de produtos</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/products/categories" className="link">
            <Icon type="tags" />
            <span>Categorias</span>
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="5">
        <Link to="/plans" className="links">
          <Icon type="solution" />
          <span>Planos</span>
        </Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout className="layout">
      {isMobile() ? (
        <Drawer
          bodyStyle={{ padding: 0 }}
          width={240}
          placement="left"
          closable={false}
          onClose={toggle}
          visible={collapsed}
        >
          {menu}
        </Drawer>
      ) : (
        <Sider
          theme="light"
          collapsedWidth="80"
          width={240}
          trigger={null}
          collapsed={!collapsed}
        >
          {menu}
        </Sider>
      )}
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0
          }}
        >
          <Icon
            className="trigger"
            type={collapsed ? "menu-fold" : "menu-unfold"}
            onClick={toggle}
          />
          <div className="header-icons">
            <Dropdown overlay={dropDownMenu}>
              <span className="avatar">
                <Avatar>{user.name[0]}</Avatar> {isMobile() ? null : user.name}
              </span>
            </Dropdown>
          </div>
        </Header>
        <Content className="m-3">
          {isMobile() ? null : (
            <Row className="crumb">
              <Breadcrumb />
            </Row>
          )}
          <Row>{props.children}</Row>
        </Content>
      </Layout>
    </Layout>
  )
}
