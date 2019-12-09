import React, { useState } from 'react';
import { Button, Row, Col, Card, Input, Form, Checkbox, Icon } from 'antd'

import { base } from '../../../config/api';
import { useCookies } from 'react-cookie';
import Sidebar from '../../../components/navbar/sidebar'

import T1 from './teste'
import T2 from './teste2'

export default function Rider(props) {

    const [collapsed, setCollapsed] = useState(true)

    const toggleCollapsed = (e) => { 
        setCollapsed(!collapsed) // ! = not (contrariar)
    }
    
    return (
        <div>
            <Sidebar 
            isCollapsed={setCollapsed} // isCollapsed retorna o estado atual da barra, true significa agrupado/fechado
            collapsed={collapsed} // collapsed recebe o valor que deseja, outro botao pode alterar a barra se quiser
            //manualCollapse // manualCollapse vai sumir com o botão se você quiser
            />
            <div className={"container justify-content-center align-items-center d-flex h-100"}>

                <Button onClick={toggleCollapsed}>
                    dvdv
                </Button>

                { collapsed ? <T1/> : <T2/> }

            </div>
        </div>

    )
}