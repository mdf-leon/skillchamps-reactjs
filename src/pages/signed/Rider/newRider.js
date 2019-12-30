import React, { useState } from 'react'
import { Form, Input, Card } from 'antd'

export default function Teste(props) {

    const [fData, setFData] = useState({
        date_of_birth: '',
        motorcycle: '',
        motorcycle_plate: '',
        license_ido: '',
        name: '',
        fed_tax_ido: '',
        subd_tax_ido: '',
        city_tax_ido: ''
    })

    return ( // justify-content
        <div className="container justify-content-center align-items-center d-flex h-100">
            <Card>
                <Form //onSubmit={handleSubmit}
                >
                    <Form.Item >
                        <Input
                            placeholder="date_of_birth"
                        />
                    </Form.Item>
                </Form>
            </Card>

        </div>
    )
}