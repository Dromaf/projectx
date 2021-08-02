import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchCardInfo = createAsyncThunk(
    'cardinfo/fetchCardInfo',
    async function (id, {rejectWithValue}) {     
        try {
            const request = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=23a88dbca49ffd6e59ebc13cc2ab60b7&language=ru`
            );

            if (request.status < 200 && request.status > 200) {
                throw new Error('Server Error');
            }
            const data = await request.data;   
            return data; 
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);       
        }
    }
);


const cardinfoSlice = createSlice({
    name: 'cardinfo',
    initialState: {
        status: null,
        error: null,
        filmData:null,
        watchItemList: [],
        unWatchItemList: [],
        checkItemList: [],
        favoriteItemList: [],
        handleFavor: false,
        handleCheckItem: false,
        handleUnWatchItem: false,
        handleWatchItem: false
    },
    reducers: {
        watchItem(state, action) {
            action.payload.filmData = { ...action.payload.filmData, ...{ 'handleWatchItem': !state.handleWatchItem } }
            
            !state.watchItemList.some(el => el.id === action.payload.filmData.id) ?
            state.watchItemList = ([...state.watchItemList, action.payload.filmData]) :
            state.watchItemList = state.watchItemList.filter(el => el.id !== action.payload.filmData.id);
            state.unWatchItemList = state.unWatchItemList.filter(el => el.id !== action.payload.filmData.id);
            state.checkItemList = state.checkItemList.filter(el => el.id !== action.payload.filmData.id);
        },
        unWatchItem(state, action) {
            action.payload.filmData = { ...action.payload.filmData, ...{ 'handleUnWatchItem': !state.handleUnWatchItem } }

            !state.unWatchItemList.some(el => el.id === action.payload.filmData.id) ?
            state.unWatchItemList = ([...state.unWatchItemList, action.payload.filmData]) :
            state.unWatchItemList = state.unWatchItemList.filter(el => el.id !== action.payload.filmData.id);
            state.checkItemList = state.checkItemList.filter(el => el.id !== action.payload.filmData.id);
            state.watchItemList = state.watchItemList.filter(el => el.id !== action.payload.filmData.id);
        },
        checkItem(state, action) {
            action.payload.filmData = { ...action.payload.filmData, ...{ 'handleCheckItem': !state.handleCheckItem } }
            
            !state.checkItemList.some(el => el.id === action.payload.filmData.id) ?
            state.checkItemList = ([...state.checkItemList, action.payload.filmData]) :
            state.checkItemList = state.checkItemList.filter(el => el.id !== action.payload.filmData.id);
            state.watchItemList = state.watchItemList.filter(el => el.id !== action.payload.filmData.id);
            state.unWatchItemList = state.unWatchItemList.filter(el => el.id !== action.payload.filmData.id);
        },
        favoriteItem(state, action) {
            action.payload.filmData = { ...action.payload.filmData, ...{ 'handleFavor': !state.handleFavort } }
            
            !state.favoriteItemList.some(el => el.id === action.payload.filmData.id) ?
            state.favoriteItemList = ([...state.favoriteItemList, action.payload.filmData]) :
            state.favoriteItemList = state.favoriteItemList.filter(el => el.id !== action.payload.filmData.id);
        },

        deleteItem(state, action){
            if (action.payload.filmData.handleFavor) {
                state.favoriteItemList = state.favoriteItemList.filter(el => el.id !== action.payload.filmData.id);
            } else {
                state.checkItemList = state.checkItemList.filter(el => el.id !== action.payload.filmData.id);
                state.watchItemList = state.watchItemList.filter(el => el.id !== action.payload.filmData.id);
                state.unWatchItemList = state.unWatchItemList.filter(el => el.id !== action.payload.filmData.id);
            }
        }
    },
    extraReducers: {
        [fetchCardInfo.pending]: (state, action) => {
            state.status = 'Loading';
            state.error = null;
         },
        [fetchCardInfo.fulfilled]: (state, action) => {
            state.status = 'Resolved';
            state.filmData = action.payload;
        },        
        [fetchCardInfo.rejected]: (state, action) => {
            console.log(action.payload)
            state.status = 'Rejected';
            state.error = action.payload;
        },

    }
});

export const { watchItem, unWatchItem, checkItem, favoriteItem, handleWatchItem, deleteItem } = cardinfoSlice.actions;

export default cardinfoSlice.reducer;