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
            state.handleWatchItem = !state.handleWatchItem;
            action.payload.filmData = { ...action.payload.filmData, ...{ 'handleWatchItem': state.handleWatchItem } }
            

            console.log(state.handleWatchItem)
            !state.watchItemList.some(el => el.id === action.payload.filmData.id) ?
            state.watchItemList = ([...state.watchItemList, action.payload.filmData]) :
            state.watchItemList = state.watchItemList.filter(el => el.id !== action.payload.filmData.id);
        },
        unWatchItem(state, action) {
            !state.unWatchItemList.some(el => el.id === action.payload.filmData.id) ?
            state.unWatchItemList = ([...state.unWatchItemList, action.payload.filmData]) :
            state.unWatchItemList = state.unWatchItemList.filter(el => el.id !== action.payload.filmData.id);
            state.handleUnWatchItem = !state.handleUnWatchItem;
        },
        checkItem(state, action) {
            !state.checkItemList.some(el => el.id === action.payload.filmData.id) ?
            state.checkItemList = ([...state.checkItemList, action.payload.filmData]) :
            state.checkItemList = state.checkItemList.filter(el => el.id !== action.payload.filmData.id);
            state.handleCheckItem = !state.handleCheckItem;
        },
        favoriteItem(state, action) {
            !state.favoriteItemList.some(el => el.id === action.payload.filmData.id) ?
            state.favoriteItemList = ([...state.favoriteItemList, action.payload.filmData]) :
            state.favoriteItemList = state.favoriteItemList.filter(el => el.id !== action.payload.filmData.id);
            state.handleFavor = !state.handleFavor;
        }
    },
});

export const { watchItem, unWatchItem, checkItem, favoriteItem, handleWatchItem } = cardinfoSlice.actions;

export default cardinfoSlice.reducer;