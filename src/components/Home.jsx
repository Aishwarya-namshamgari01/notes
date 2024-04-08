import { Box, Grid, styled } from "@mui/material";
import NoteHeader from "./NoteHeader";
import Drawer from "./MyDrawer";
import MyDrawer from "./MyDrawer";
import MainNotesPage from "./MainNotesPage";
import Notes from "./Notes/Notes";
import { Route, Routes } from "react-router-dom";
import ArchiveNotes from "./Archives/ArchiveNotes";
import DeleteNotes from "./deletes/DeleteNotes";

const Home = () => {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <MyDrawer />
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/archive' element={<ArchiveNotes />} />
        <Route path='/delete' element={<DeleteNotes />} />
      </Routes>
    </Box>
  );
};
export default Home;
