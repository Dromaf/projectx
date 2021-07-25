import { configureStore } from "@reduxjs/toolkit";
import cardinfoReducer from './cardinfoSlice';


export default configureStore({
    reducer: {
        cardinfo: cardinfoReducer,
    }
})