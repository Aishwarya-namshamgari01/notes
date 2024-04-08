import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, NavLink } from "react-router-dom";

const items = [
  {
    id: "1",
    name: "Notes",
    icon: <LightbulbOutlinedIcon />,
    route: "/",
  },
  {
    id: "2",
    name: "Archive",
    icon: <ArchiveIcon />,
    route: "/archive",
  },
  {
    id: "3",
    name: "Bin",
    icon: <DeleteIcon />,
    route: "/delete",
  },
];
export default function NavList() {
  return (
    <List>
      {items.map(({ id, name, icon, route }) => (
        <ListItem key={name} disablePadding sx={{ display: "block", margin: '5px' }} >
          <NavLink
            to={`${route}`}
            // style={{ textDecoration: "none", color: "inherit" }}
            style={({ isActive }) =>
              isActive ? { color: "red", backgroundColor: '#feefc3', textDecoration: "none", width: '10px', height: '5px' } : { textDecoration: "none", color: "inherit" }
            }
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                '&.Mui-selected': {
                  backgroundColor: 'red'
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}
