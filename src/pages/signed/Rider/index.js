import React, { useState } from 'react';
import { Button, Row, Col, Card, Input, Form, Checkbox, Icon } from 'antd'

import { base } from '../../../config/api';
import { useCookies } from 'react-cookie';
import Sidebar from '../../../components/navbar/sidebar'

import NewRider from './newRider'

export default function Rider(props) {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = (e) => { 
        setCollapsed(!collapsed) // ! = not (contrariar)
    }
    
    return (
        <div>
            <Sidebar defaultCollapsed />
            <div className={"container justify-content-center align-items-center d-flex h-100"}>

                <NewRider />

            </div>
        </div>

    )
}