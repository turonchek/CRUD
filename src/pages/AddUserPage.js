import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

export const AddUserPage = () => {

    const navigate = useNavigate();

    const [state, setstate] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    });

    const { name, email, contact, address} = state;

    return (
        <>
            <Button 
                sx={{marginY:5}}
                variant='contained' 
                color="secondary" 
                onClick={() => navigate("/")}
            >
                Go back
            </Button>
            <h2>Add user</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="standard-basic" 
                    type="text" 
                    label="Name" 
                    variant="standard" 
                    value={name} />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="email" 
                    label="Email" 
                    variant="standard" 
                    value={email} />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="number" 
                    label="Contact" 
                    variant="standard" 
                    value={contact} />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="text" 
                    label="Address" 
                    variant="standard" 
                    value={address} />
                <br />
                <Button 
                    variant='contained' 
                    color="primary" 
                    type="submit"
                    >
                        Submit
                    </Button>
            </Box>
        </>
    );
}

