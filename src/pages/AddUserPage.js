import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUserAsync } from '../ducks/users';

export const AddUserPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    });

    const [error, setError] = useState(false);
    console.log(error)

    const handleInput = (e) => {
        const {value, name} = e.target;
        setState({
            ...state,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !address || !email || !contact) {
            setError(true)
        }else {
            dispatch(addUserAsync(state))
            navigate("/")
            setError(false)
        }
    }

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
                onSubmit={handleSubmit}
            >
                <TextField 
                    id="standard-basic" 
                    type="text" 
                    label="Name" 
                    variant="standard" 
                    value={name}
                    name="name" 
                    onChange={handleInput}
                    />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="email" 
                    label="Email" 
                    variant="standard" 
                    value={email}
                    name="email" 
                    onChange={handleInput}
                    />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="number" 
                    label="Contact" 
                    variant="standard" 
                    value={contact}
                    name="contact"
                    onChange={handleInput}
                    />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="text" 
                    label="Address" 
                    variant="standard" 
                    value={address}
                    name="address" 
                    onChange={handleInput}
                    />
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

