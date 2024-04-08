import { Box, Grid, styled } from "@mui/material";
import MainNotesPage from "../MainNotesPage";
import Form from "../Form";
import { useSelector } from "react-redux";
import EmptyNote from "../Notes/EmptyNote";
import ArchiveNote from "./ArchiveNote";
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ArchiveNotes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const archiveNotes = useSelector((state) => state.notes.archiveNotes);
  // console.log('helo', notes, archiveNotes, notes.length);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {/* <Form /> */}
        {archiveNotes.length > 0 ? (
          <Grid container sx={{ margin: "18px" }}>
            {archiveNotes.map((note) => (
              <Grid item>
                <ArchiveNote
                  note={note}
                  title={note.title}
                  id={note.id}
                  description={note.description}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNote />
        )}

        {/* <MainNotesPage /> */}
      </Box>
    </Box>
  );
};
export default ArchiveNotes;
