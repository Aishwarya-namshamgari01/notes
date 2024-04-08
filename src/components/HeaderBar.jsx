import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { TextField } from "../ui/TextFiled";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const MyAppBar = styled(MuiAppBar)`
  z-index: 1201;
  background-color: #fff;
  height: 70px;
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
`;

const Heading = styled(Typography)`
  color: #000;
  font-size: 20px;
  margin-left: 8px;
`;
export default function HeaderBar({ open, handleDrawer }) {
  const theme = useTheme();

  return (
    <>
      <MyAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 2,
              // ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="googlekeep.png"
            alt="google kepp"
            height="40px"
            width="40px"
          />
          <Heading>Notes</Heading>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{marginLeft: '10%',  width: '100%'}}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                // border: "2px solid black",
                backgroundColor: "rgba(0,0,0,.1)",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
                borderRadius: "6px",
                border: '1px solid transparent'
              }}
            >
              <SearchIcon
                sx={{ stroke: "rgba(0,0,0,.5)", color: "black", padding: "3px" }}
              />
              <TextField
                fullWidth
                placeholder="Search"
                id="fullWidth"
                sx={{
                  width: "550px",
                  height: "37px",
                  backgroundColor: "transparent",
                }}
              />
            </Stack>
            <Stack>
              <Avatar>A</Avatar>
            </Stack>
          </Stack>
        </Toolbar>
      </MyAppBar>
    </>
  );
}
