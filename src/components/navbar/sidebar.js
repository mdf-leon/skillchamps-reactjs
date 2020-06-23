import React, { useState, useEffect } from 'react'
import { Icon, Menu } from 'antd'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'

export default function Sidebar(props) {

    const [cookies, setCookie, removeCookie] = useCookies("jwt");

    const { layout, ...rest } = props

    const [collapsed, setCollapsed] = useState(false)

    const [seleKey, setSeleKey] = useState(props.SeleKey)

    const toggleCollapsed = () => {
        if (props.isCollapsed) {
            props.isCollapsed(!collapsed)// envia pra parent
        }
        setCollapsed(!collapsed)
    }

    // useEffect(()=>{
    //     props.isCollapsed(collapsed)
    // }, [collapsed])

    useEffect(() => {
        //console.log(props.collapsed)
        //props.collapsed ? setCollapsed(true) : setCollapsed(false)
        //if(props.collapsed){
        //let clpsd = props.collapsed
        setCollapsed(props.collapsed)
        //}

    }, [props.collapsed])

    // useEffect(() => {
        
    //     let sk = props.SeleKey
    //     setSeleKey(props.SeleKey)
    //     console.log(sk)
    // }, [props.SeleKey])

    useEffect(() => {
        if (props.collapsed != false) {
            toggleCollapsed()
        }
    }, [])

    const logOut = () => {
        removeCookie("jwt")
        window.location.reload()
    }

    return (
        <div style={{ width: 256, height: '100%', position: 'absolute', zIndex: collapsed ? 0 : 10}}>
            {/* <Button type="primary" onClick={() => toggleCollapsed()} style={{ margin: 16 }}
          >
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} 
            />
          </Button> */}
            <Menu
                style={{ height: '100%' }}
                defaultSelectedKeys={seleKey.toString()}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
            >
                {props.manualCollapse ? null : <div onClick={() => toggleCollapsed()}
                    style={{
                        height: 45, textAlign: 'center', justifyContent: 'center',
                        alignItems: 'center', display: 'flex'
                    }}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        style={{ alignSelf: 'center', verticalAlign: 'center' }}
                    />
                </div>}
                <Menu.Item key="1">
                    <Icon type="desktop" />
                    <span>Dashboard</span>
                    <Link to="/dashboard" />
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="apple" />
                    <span>Rider</span>
                    <Link to="/rider" />
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Account Options</span>
                    <Link to="/AccountOptions" />
                </Menu.Item>
                <Menu.SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Conta</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Login</Menu.Item>
                    <Menu.Item key="6" onClick={logOut}>Leave</Menu.Item>
                    <Menu.Item key="7">Pagina inicial</Menu.Item>
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

//teste

    // const sidebar = (
    //     <div style={{
    //         position: 'absolute', height: '100%',
    //     }}>
    //         <div onClick={ toggleCollapsed } 
    //             style={{
    //                 height: 45, paddingLeft: 33,
    //                 //textAlign: 'center', 
    //                 //justifyContent: 'center',
    //                 alignItems: 'center', display: 'flex',
    //                 width: collapsed ? 80 : 256,
    //                 borderTop: 0, borderBottom: 0, borderLeft: 0,
    //                 borderRight: 1, borderColor: '#e8e8e8', borderStyle: 'solid'
    //             }}>
    //             <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}
    //                 style={{ alignSelf: 'center', verticalAlign: 'center' }}
    //             />
    //         </div>
    //         <Sidebar manualCollapse collapsed={collapsed} />
    //     </div>
    // )