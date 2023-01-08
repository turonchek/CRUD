import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users:[],
    user:{},
    loading:true
};

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        deleteUser: (state, action) => {
            const deleteUser = state.users.filter((user) => user.id !== action.payload)
            state.users = deleteUser;
            state.loading = false
        }
    }
})

// export const getAllUsersAsync = () => async (dispatch) => {
//     try {
//         const response = await axios.get(`${process.env.REACT_APP_API}`);
//         dispatch(getAllUsers(response.data));
//     } catch (err) {
//         throw new Error(err);
//     }
// }

export const getAllUsersAsync = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
                console.log(resp);
                dispatch(getAllUsers(resp.data));
            })
            .catch((error) => console.log(error))
    }
}

export const deleteUserAsync = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                console.log(resp);
                dispatch(deleteUser());
                dispatch(getAllUsers());
            })
            .catch((error) => console.log(error))
    }
}

const { reducer, actions } = usersSlice;

export default reducer;

export const { getAllUsers, deleteUser } = actions;

export const selectUsers = (rootState) => rootState.users;