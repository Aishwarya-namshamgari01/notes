import { Box, Grid, styled } from "@mui/material";
import MainNotesPage from "../MainNotesPage";
import Form from "../Form";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import EmptyNote from "./EmptyNote";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reOrderNotes } from "../notesSlice";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const notes = useSelector((state) => state.notes.notes);
  const archiveNotes = useSelector((state) => state.notes.archiveNotes);
  const dispatch = useDispatch();
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(notes, result.source.index, result.destination.index);
    dispatch(
      reOrderNotes({
        notes: items,
      })
    );
  };
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <Grid
                  container
                  sx={{ margin: "18px" }}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {notes.map((note, index) => (
                    <Draggable
                      key={note.id}
                      draggableId={note.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Grid
                          item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Note
                            note={note}
                            title={note.title}
                            id={note.id}
                            description={note.description}
                          />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNote />
        )}

        {/* <MainNotesPage /> */}
      </Box>
    </Box>
  );
};
export default Notes;
