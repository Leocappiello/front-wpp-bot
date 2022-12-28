import React from 'react'
import BarMenu from '../barMenu/BarMenu'
import Conversation from '../conversation/Conversation'
import Mailbox from '../mailbox/Mailbox'
import './chat.css'

const Chat = () => {
  return (
    <div className='chat'>
        <BarMenu className='barMenu'></BarMenu>
        <Mailbox className='mailbox'></Mailbox>
        <Conversation className='conversation'></Conversation>
    </div>
  )
}

export default Chat