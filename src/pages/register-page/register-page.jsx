import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, TextField } from '@mui/material'
import '../register-page/register-page.css';
import axios from 'axios';

export default function RegisterPage() {
    const [userRegister, setUserRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleRegister = (e) =>{
        setUserRegister((prev) => (
            {...prev, [e.target.name]: e.target.value }
        ));
    };

    const handleSubmitRegister = async e =>{
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/users", userRegister);
        } catch (err) {
            console.log(err);
        }
    }

    console.log(userRegister);

    return (
        <div className='register-page-layout'>
            <Card className='register-card' variant='outlined' sx={{ width: 600}}>
                <CardHeader title="Register" sx={{ textAlign: 'center'}} />
                <CardContent sx={{ textAlign: 'center'}}>
                    <form>
                        <TextField name='name'
                            label="Name" sx={{ marginY: 2 }} variant='outlined' fullWidth 
                            onChange={handleRegister}
                        />
                        <TextField name='email' type='email' 
                            label="Email" sx={{ marginY: 2 }} variant='outlined' fullWidth
                            onChange={handleRegister}
                        />
                        <TextField name='password' type="password" 
                            label="Password" sx={{ marginY: 2 }} variant='outlined' fullWidth
                            onChange={handleRegister}
                        />
                    </form>
                    <Button variant='contained' onClick={handleSubmitRegister}>Register</Button>
                </CardContent>
            </Card>
        </div>
    );
}