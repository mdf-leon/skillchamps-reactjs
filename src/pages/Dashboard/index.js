import React, { useState } from 'react';
import { Button, Row, Col, Card, Input, Form, Checkbox, Icon } from 'antd'

import { base } from '../../config/api';
import { useCookies } from 'react-cookie';
import Sidebar from '../../components/navbar/sidebar'



export default function Login(props) {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = (e) => { 
        setCollapsed(!collapsed) // ! = not (contrariar)
    }

    const sidebar = (
        <div style={{
            position: 'absolute', height: '100%',
        }}>
            <div onClick={ toggleCollapsed } 
                style={{
                    height: 45, paddingLeft: 33,
                    //textAlign: 'center', 
                    //justifyContent: 'center',
                    alignItems: 'center', display: 'flex',
                    width: collapsed ? 80 : 256,
                    borderTop: 0, borderBottom: 0, borderLeft: 0,
                    borderRight: 1, borderColor: '#e8e8e8', borderStyle: 'solid'
                }}>
                <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    style={{ alignSelf: 'center', verticalAlign: 'center' }}
                />
            </div>
            <Sidebar manualCollapse collapsed={collapsed} />
        </div>
    )

    return (
        <div>
            {sidebar}
            <div className={"container justify-content-center align-items-center d-flex h-100"}>

                <h1>owo</h1>

            </div>
        </div>

    )
}