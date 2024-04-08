import { Box, Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
const EmptyNote = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
        flexDirection: "column",
      }}
    >
      <LightbulbOutlinedIcon sx={{color: 'gray', width: '200px', height: '120px', opacity: '40%'}}/>
      <Typography variant="h6" sx={{color: '#80868b'}}>Notes you add appear here</Typography>
    </Box>
  );
};
export default EmptyNote;
