import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "../reducer/imageReducer";

export const store = configureStore({
    reducer: {
        imageReducer: imageReducer,
    },
});

