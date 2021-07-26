import { createSlice } from "@reduxjs/toolkit";

const cardinfoSlice = createSlice({
    name: 'cardinfo',
    initialState: {
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
            console.log(action.payload.filmData)
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
            console.log(action.payload.filmData)
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
            console.log(action.payload.filmData)
            state.checkItemList = state.checkItemList.filter(el => el.id !== action.payload.filmData.id);
            state.watchItemList = state.watchItemList.filter(el => el.id !== action.payload.filmData.id);
            state.unWatchItemList = state.unWatchItemList.filter(el => el.id !== action.payload.filmData.id);

            if(action.payload.filmData.handleFavor) state.favoriteItemList = state.favoriteItemList.filter(el => el.id !== action.payload.filmData.id);
           
        }
    },
});

export const { watchItem, unWatchItem, checkItem, favoriteItem, handleWatchItem, deleteItem } = cardinfoSlice.actions;

export default cardinfoSlice.reducer;