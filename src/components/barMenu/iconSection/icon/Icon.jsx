import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Icon = ({ icon = faUser }) => {
    return (
        <p style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <FontAwesomeIcon icon={icon} style={{
                padding: '1rem'
            }} />
            icon
        </p>
    )
}

export default Icon