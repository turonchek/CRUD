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
import { getAllUsersAsync, selectUsers } from '../ducks/users';

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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

export const HomePage = () => {

    const dispatch = useDispatch();

    const {users} = useSelector(selectUsers);

    useEffect(() => {
        dispatch(getAllUsersAsync());
    },[])

    return (
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
                    <StyledTableCell align="center"></StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

