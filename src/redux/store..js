import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../components/notesSlice";

export default configureStore({
    reducer: {
        notes: notesReducer
    }
});