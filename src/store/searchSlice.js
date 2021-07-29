import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async function (onSearchFilms, {rejectWithValue}) {     
        try {
            const request = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=ru-RU&query=${onSearchFilms}&page=1&include_adult=false`
            );
            if (request.status < 200 && request.status > 200) {
                throw new Error('Server Error');
            }
            const data = await request.data;   
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);       
        }
    }
);


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        status: null,
        error: null,
        searchData:[]
    },
    reducers: {
        watchItem(state, action) {
           
        },
        unWatchItem(state, action) {
           
        },
        checkItem(state, action) {
          
        },
        favoriteItem(state, action) {
          
        },

        deleteItem(state, action){
               
        }
    },
    extraReducers: {
        [fetchSearch.pending]: (state, action) => {
            state.status = 'Loading';
            state.error = null;
         },
        [fetchSearch.fulfilled]: (state, action) => {
            state.status = 'Resolved';
            state.searchData = action.payload;
        },        
        [fetchSearch.rejected]: (state, action) => {
            state.status = 'Rejected';
            state.error = action.payload;
        },

    }
});

export const { watchItem, unWatchItem, checkItem, favoriteItem, handleWatchItem, deleteItem } = searchSlice.actions;

export default searchSlice.reducer;