import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[],
    user:{},
    loading:false
};

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {

    }
})

const { reducer, actions } = usersSlice;

export default reducer;

export const selectUsers = (rootState) => rootState.users;