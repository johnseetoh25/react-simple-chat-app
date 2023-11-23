import React from 'react';
import '../chat-box/chat.css';
import ChatInsert from '../components/chat-insert/chat-insert';
import SenderChatBubble from '../components/chat-bubble/sender/sender-chat-bubble';



export default function Chat() {
  return (
    <div className='chat-container'>
        <div className='chat-contents'>
          <SenderChatBubble/>
        </div>
        <div className='chat-bottom'>
            <ChatInsert/>
        </div>
       
        
    </div>
  );
}
