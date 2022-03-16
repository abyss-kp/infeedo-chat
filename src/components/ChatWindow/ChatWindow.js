import React from 'react'
import ChatDisplay from './ChatDisplay'
import ChatInput from './ChatInput'

export default function ChatWindow(props) {
    return (
        <>
            <ChatDisplay />
            {props.selectedBot && <ChatInput />}
        </>
    )
}
