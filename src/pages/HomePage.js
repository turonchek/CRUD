import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsersAsync, selectUsers, deleteUserAsync } from '../ducks/users';
import { Button, ButtonGroup } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const HomePage = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {users} = useSelector(selectUsers);

    useEffect(() => {
        dispatch(getAllUsersAsync());
    },[])

    return (
        <>
        <Box>
            <Button 
                sx={{marginY:5}}
                variant='contained' 
                color="primary" 
                onClick={() => navigate("/addUser")}
            >
                Add user
            </Button>
        </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Contact</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users && users.map((user) => (
                        <StyledTableRow key={user.id}>
                        <StyledTableCell component="th" scope="row">
                            {user.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">{user.email}</StyledTableCell>
                        <StyledTableCell align="center">{user.contact}</StyledTableCell>
                        <StyledTableCell align="center">{user.address}</StyledTableCell>
                        <StyledTableCell align="center">
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    '& > *': {
                                    m: 1,
                                    },
                                }}
                                >
                                <ButtonGroup variant="contained" aria-label="contained primary button group">
                                    <Button  
                                        onClick={() => dispatch(deleteUserAsync(user.id))}
                                        color="secondary">Delete</Button>
                                    <Button 
                                        color="primary"
                                        onClick={() => navigate(`/editUser/${user.id}`)}
                                        >
                                            Edit
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

