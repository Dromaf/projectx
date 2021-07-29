import { configureStore } from "@reduxjs/toolkit";
import cardinfoReducer from './cardinfoSlice';
import searchReducer from './searchSlice';


export default configureStore({
    reducer: {
        cardinfo: cardinfoReducer,
        search: searchReducer,
    }
})