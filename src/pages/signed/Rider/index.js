import React, { useState } from 'react';
import Sidebar from '../../../components/navbar/sidebar'

import NewRider from './newRider'

export default function Rider(props) {
    
    return (
        <div className="h-100">
            <Sidebar SeleKey={'2'}/>
            <div className="container justify-content-center align-items-center d-flex h-100">

                <NewRider />

            </div>
        </div>

    )
}