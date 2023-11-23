import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../dashboard/dashboard.css'
import { ChatBubble } from '@mui/icons-material';
import Chat from '../../chat-box/chat';

function ChatDialogModal(props){
    const { open, onClose } = props;

    return(
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Chat</DialogTitle>
            <DialogContent sx={{padding: 0}}><Chat/></DialogContent>
            <DialogActions><Button onClick={onClose}>Close</Button></DialogActions>
        </Dialog>
    );
}

export default function Dashboard() {
    const [openChatDialog, setOpenChatDialog] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('chatDialogOpen');
        if (storedValue) {
            setOpenChatDialog(storedValue === 'true');
        }
    }, []);

    const handleClickOpenChatDialog = () =>{
        setOpenChatDialog(true);
        localStorage.setItem('chatDialogOpen', 'true');
    }

    const handleClickCloseChatDialog = () =>{
        setOpenChatDialog(false);
        localStorage.setItem('chatDialogOpen', 'false');
    }

    return (
        <div className='dashboard-layout'>
            <h1>Dashboard</h1>
            <Button variant='contained' startIcon={<ChatBubble/>} onClick={handleClickOpenChatDialog}>Chat</Button>
            <ChatDialogModal 
                open={openChatDialog} 
                onClose={handleClickCloseChatDialog}
            />
        </div>
    );
}