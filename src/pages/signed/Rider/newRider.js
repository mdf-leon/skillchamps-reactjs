import React, { useState } from 'react'

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

    return (
        <div>
            <h1>new rider</h1>
        </div>
    )
}