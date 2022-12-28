import React from 'react'
import Icon from './icon/Icon'
import './iconsection.css'

import { faUser } from '@fortawesome/free-solid-svg-icons'

const IconSection = () => {
  return (
    <div className='iconsection'>
        <Icon icon={faUser}></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
    </div>
  )
}

export default IconSection