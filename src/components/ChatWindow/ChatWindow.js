import React from 'react'
import ChatDisplay from './ChatDisplay'
import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

export default function ChatWindow(props) {
    return (
        <>
            <ChatDisplay />
            {props.selectedBot && <ChatInput />}
        </>
    )
}
