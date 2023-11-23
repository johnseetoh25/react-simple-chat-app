import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../sender/sender-chat-bubble.css';
import axios from 'axios';

export default function SenderChatBubble() {
    const [senderMessage, setSenderMessage] = useState([]);

    useEffect(()=>{
        const fetchSenderMessage = async () =>{
            try {
                const res = await axios.get("http://localhost:8800/chats");
                setSenderMessage(res.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchSenderMessage();
    },[]);

    return (
        <div>
            {
                senderMessage.map((messageSend)=>(
                    <div className='sender-chat-bubble-layout' key={messageSend.id}>
                        <Avatar></Avatar>
                        <div className='sender-chat-bubble'>{messageSend.chatcontent}</div>
                    </div>
                ))
            }
        </div>
    );
}
