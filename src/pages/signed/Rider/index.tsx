import React, { useState } from 'react';

import NewRider from './newRider'

export default function Rider(props) {
    
    return (
        <div className="h-100">
            <div className="container justify-content-center align-items-center d-flex h-100">

                <NewRider />

            </div>
        </div>

    )
}