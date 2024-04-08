import { Box, Grid, styled } from "@mui/material";
import Form from "../Form";
import { useSelector } from "react-redux";
import EmptyNote from "../Notes/EmptyNote";
import DeleteNote from "./DeleteNote";
const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const deleteNotes = useSelector((state) => state.notes.deleteNotes);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        {/* <Form /> */}
        {deleteNotes.length > 0 ? (
          <Grid container sx={{ margin: "18px" }}>
            {deleteNotes.map((note) => (
              <Grid item>
                <DeleteNote
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
export default DeleteNotes;
