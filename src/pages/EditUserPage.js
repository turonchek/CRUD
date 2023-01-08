import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUserAsync, selectUsers, updateUserAsync } from '../ducks/users';

export const EditUserPage = () => {

    
    const {user} = useSelector(selectUsers);

    useEffect(() => {
        dispatch(getSingleUserAsync(id));
    },[]);

    useEffect(() => {
        if(user){
            setState({...user})
        }
    },[user])

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();

    const [state, setState] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",
    });

    const [error, setError] = useState(false);

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
            dispatch(updateUserAsync(state,id))
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
                onClick={() => navigate(-1)}
            >
                Go back
            </Button>
            <h2>Edit user</h2>
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
                    value={name || ""}
                    name="name" 
                    onChange={handleInput}
                    />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="email" 
                    label="Email" 
                    variant="standard" 
                    value={email || ""}
                    name="email" 
                    onChange={handleInput}
                    />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="number" 
                    label="Contact" 
                    variant="standard" 
                    value={contact || ""}
                    name="contact"
                    onChange={handleInput}
                    />
                <br />
                <TextField 
                    id="standard-basic" 
                    type="text" 
                    label="Address" 
                    variant="standard" 
                    value={address || ""}
                    name="address" 
                    onChange={handleInput}
                    />
                <br />
                <Button 
                    variant='contained' 
                    color="primary" 
                    type="submit"
                    >
                        Update
                    </Button>
            </Box>
        </>
    );
}

