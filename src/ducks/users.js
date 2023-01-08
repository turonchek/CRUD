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
            console.log(action)
            const deleteUser = state.users.filter((user) => user.id !== action.payload)
            state.users = deleteUser;
            state.loading = false
        },
        addUser: (state,action) => {
            state.users.push(action.payload)
            state.loading = false
        },
        getSingleUser: (state, action) => {
            state.user=action.payload
            state.loading = false
        },
        updateUser: (state, action) => {
            state.user=action.payload
            state.loading = false
        }
    }
})

export const getAllUsersAsync = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((resp) => {
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
                dispatch(deleteUser(id));
            })
            .catch((error) => console.log(error))
    }
}

export const addUserAsync = (user) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((resp) => {
                dispatch(addUser(user));
            })
            .catch((error) => console.log(error))
    }
}

export const getSingleUserAsync = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((resp) => {
                dispatch(getSingleUser(resp.data));
            })
            .catch((error) => console.log(error))
    }
}

export const updateUserAsync = (user, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, user)
            .then((resp) => {
                dispatch(updateUser());
            })
            .catch((error) => console.log(error))
    }
}

const { reducer, actions } = usersSlice;

export default reducer;

export const { getAllUsers, deleteUser, addUser, getSingleUser, updateUser } = actions;

export const selectUsers = (rootState) => rootState.users;