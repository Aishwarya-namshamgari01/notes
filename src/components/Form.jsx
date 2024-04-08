import { Box, ClickAwayListener, Stack } from "@mui/material";
import { TextField } from "../ui/TextFiled";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./notesSlice";

export default function Form() {
  const [makeNotes, setMakeNotes] = useState(false);
  const [note, setNote] = useState({
    id: "",
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const awayClickHanlder = () => {
    setMakeNotes(false);
    if (note.title !== "" && note.description !== "") {
      setNote({
        ...note,
        id: uuid(),
      });
      dispatch(
        addNote({
          note: {...note, id: uuid()},
        })
      );
    }
    setNote({
      id: "",
      title: "",
      description: "",
    });
  };
  return (
    <Stack
      sx={{
        width: "600px",
        padding: "10px",
        border: "transparent",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.30) 0px 3px 8px",
        borderRadius: "8px",
        margin: "auto",
      }}
    >
      <ClickAwayListener onClickAway={awayClickHanlder}>
        {!makeNotes ? (
          <Box
            sx={{ height: "28px", padding: "5px" }}
            onClick={() => setMakeNotes(!makeNotes)}
          >
            Take a note...
          </Box>
        ) : (
          <Box sx={{ margin: "3px" }}>
            <TextField
              placeholder="Title"
              sx={{ width: "100%", padding: "5px" }}
              onChange={(event) =>
                setNote({
                  ...note,
                  title: event.target.value,
                })
              }
            />
            <TextField
              placeholder="Take a note"
              autoFocus
              sx={{ width: "100%", padding: "5px" }}
              onChange={(event) =>
                setNote({
                  ...note,
                  description: event.target.value,
                })
              }
            />
          </Box>
        )}
      </ClickAwayListener>
    </Stack>
  );
}
