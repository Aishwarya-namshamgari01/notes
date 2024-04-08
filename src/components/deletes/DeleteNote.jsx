import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import { addArchiveNote, addDeleteNote } from "../notesSlice";

const DeleteNote = ({ note, id, title, description }) => {
  const notes = useSelector((state) => state.notes.notes);
  const archiveNotes = useSelector((state) => state.notes.archiveNotes);
  const dispatch = useDispatch();
  return (
    <>
      <Card
        sx={{
          minWidth: 250,
          border: "1px solid #e0e0e0",
          margin: "8px",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {description}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <ArchiveIcon
            fontSize="small"
            sx={{ marginLeft: "auto" }}
            onClick={() => {
              const filteredNotes = notes.filter((note) => note.id !== id);
              dispatch(
                addArchiveNote({
                  archievedNote: note,
                  filteredNotes: filteredNotes
                })
              );
            }}
          />
          <DeleteIcon fontSize="small" sx={{ marginLeft: "auto" }} onClick={() => {
            const filteredNotes = notes.filter((note) => note.id !== id);
            dispatch(addDeleteNote({
                deletedNote: note,
                filteredNotes: filteredNotes
            }))
          }}/>
        </CardActions> */}
      </Card>
    </>
  );
};
export default DeleteNote;
