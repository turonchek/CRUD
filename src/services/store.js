import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../ducks/users";

export const store = configureStore({
    reducer: {
        users:usersReducer,
    },
    devTools:true
})