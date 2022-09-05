import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import productReducer from "./ExtraSlce";

const store = configureStore({
    reducer: {
        card: cardReducer,
        productView: productReducer,
    },
});
export default store;
