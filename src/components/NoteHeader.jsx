import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack, Typography } from "@mui/material";
const NoteHeader = () => {
  return (
    <Stack direction="row" sx={{height: '40px', border: '2px  solid blue', width: '100px'}}>
      <Stack direction="row">
        <IconButton>
          <MenuIcon fontSize="large"/>
        </IconButton>
      </Stack>
    </Stack>
  );
};
export default NoteHeader;
