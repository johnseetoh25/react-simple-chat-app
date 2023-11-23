import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../chat-insert/chat-insert.css'
import { Button, IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

export default function ChatInsert() {
    
    const [ chatSend, setChatSend ] = useState({
        chatcontent: "",
    });

    const handleChange = (e) =>{
        setChatSend((prev) =>(
            { ...prev, [e.target.name]: e.target.value}
        ));
    }

    const handleSendBtn = async e =>{
        e.preventDefault();
        if (chatSend.chatcontent.trim() === "") {
            return; // If the text field is empty or contains only whitespace, do not proceed with the API call
        }
        try {
            await axios.post("http://localhost:8800/chats", chatSend);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
    console.log(chatSend);

    // other feature
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSendBtn(e);
        }
    };

    //screen responsive
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsSmallScreen(window.innerWidth <= 500);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='chat-insert-layout'>
            <form>
                <TextField name="chatcontent"
                    size='small' placeholder='Type a message...' fullWidth
                    sx={{backgroundColor: 'white'}}
                    onChange={handleChange}  onKeyDown={handleKeyDown} 
                />
            </form>
            {isSmallScreen ? (
                <IconButton sx={{ backgroundColor: '#1976d2', color: 'white', ':hover':{ color: '#1976d2' }, }} onClick={handleSendBtn}><Send/></IconButton>
            ):(
                <Button variant='contained' endIcon={<Send/>} onClick={handleSendBtn}>Send</Button>
            )}
            
        </div>
    );
}
