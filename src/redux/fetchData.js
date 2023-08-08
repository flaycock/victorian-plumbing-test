import { createSlice } from '@reduxjs/toolkit';

export const fetchData = createSlice({
    name: 'queryParams',
    initialState: {
        value: {
            query: "toilets",
            pageNumber: 0,
            size: 0,
            additionalPages: 0,
            sort: 1,
            facets: {},
        }
    },
    reducers: {
        setQueryParams: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setQueryParams } = fetchData.actions;
export default fetchData.reducer;