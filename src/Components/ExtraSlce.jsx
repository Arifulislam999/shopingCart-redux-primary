import { createSlice } from "@reduxjs/toolkit";

export const extraSlice = createSlice({
    name: "extraSlice",
    initialState: [],
    reducers: {
        productAdd: (state, action) => {
            if (state.length >= 1) {
                state.pop();
                state.push(action.payload);
            } else {
                state.push(action.payload);
            }
        },
    },
});
export const { productAdd } = extraSlice.actions;
export default extraSlice.reducer;
