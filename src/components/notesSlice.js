import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState: {
    notes: [],
    archiveNotes: [],
    deleteNotes: [],
  },
  reducers: {
    addNote: (state, action) => {
      // console.log(action.payload.note);
      state.notes = [...state.notes, action.payload.note];
    },
    addArchiveNote: (state, action) => {
      state.archiveNotes = [
        ...state.archiveNotes,
        action.payload.archievedNote,
      ];
      state.notes = action.payload.filteredNotes;
      // console.log(state.notes, state.archiveNotes);
    },
    addDeleteNote: (state, action) => {
      state.deleteNotes = [...state.deleteNotes, action.payload.deletedNote];
      state.notes = action.payload.filteredNotes;
    },
    reOrderNotes: (state, action) => {
        state.notes = action.payload.notes
    },
    removeArchiveNote: (state, action) => {
      state.archiveNotes = action.payload.filteredNotes
    }
  },
});
export const { addNote, addArchiveNote, addDeleteNote, reOrderNotes, removeArchiveNote } = notesSlice.actions;
export default notesSlice.reducer;
