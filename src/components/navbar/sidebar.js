import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu } from 'antd'

export default function Sidebar(props) {

    const { layout, ...rest } = props

    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    useEffect(() =>{
        props.collapsed ? setCollapsed(true) : setCollapsed(false)
    }, [props.collapsed])

    return (
        <div style={{ width: 256, height: '100%' }}>
            {/* <Button type="primary" onClick={() => toggleCollapsed()} style={{ margin: 16 }}
          >
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} 
            />
          </Button> */}
            <Menu
                style={{height: '100%'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
            >
                { props.manualCollapse ? null : <div onClick={() => toggleCollapsed()} 
                style={{height: 45, textAlign: 'center', justifyContent: 'center', 
                alignItems: 'center', display: 'flex'}}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    style={{alignSelf: 'center', verticalAlign: 'center'}}
                    />
                </div>}
                <Menu.Item key="1">
                    <Icon type="apple" />
                    <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                </Menu.Item>
                <Menu.SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu>
            </Menu>
        </div>
    );
}