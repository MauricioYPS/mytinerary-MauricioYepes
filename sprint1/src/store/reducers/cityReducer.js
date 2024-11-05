// src/redux/reducers/cityReducer.js
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';



// Thunk para la llamada a la API
export const fetchCities = createAsyncThunk(
    'cities/fetchCities',
    async (searchTerm = '', { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cities/all?name=${searchTerm}`);
            const data = await response.json();
            return data.response; // Asegúrate de que la respuesta esté en data.response
        } catch (error) {
            return rejectWithValue('Error fetching cities');
        }
    }
);
// Estado inicial
const initialState = {
    cities: [],
    search: "",
    isLoading: false,
    error: null,
};

// Reducer
export const cityReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCities.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchCities.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cities = action.payload;
        })
        .addCase(fetchCities.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase('cities/changeSearch', (state, action) => {
            state.search = action.payload;
        });
});
