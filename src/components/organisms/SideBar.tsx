import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

interface SideBarMenu {
  icon: React.ReactElement;
  title: string;
  amount?: number;
}

interface SideBarProps {
  sideMenuList: SideBarMenu[];
}

function SideBar({ sideMenuList }: SideBarProps) {
  const [toggle, setToggle] = useState(false);

  const handleEnter = (e: React.MouseEvent) => {
    setToggle(true);
  };

  const handleLeave = (e: React.MouseEvent) => {
    setToggle(false);
  };

  const handleSideMenuList = ({ icon, title, amount = 5 }: SideBarMenu) => (
    <ListItemButton key={title}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primary={title}
        sx={{
          whiteSpace: "nowrap",
        }}
      />
      <ListItemIcon sx={{ pl: 1, fontSize: 12, justifyContent: "flex-end" }}>
        {amount}
      </ListItemIcon>
    </ListItemButton>
  );

  return (
    <Box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      sx={{
        height: "100%",
        ...(toggle && {
          boxShadow: "0 0 5px 3px #cdcdcd",
          zIndex: 0,
        }),
      }}>
      <List
        sx={{
          flex: 1,
          maxWidth: toggle ? 1000 : 60,
          transition: "100ms ease-in-out",
          overflow: "hidden",
        }}>
        {sideMenuList.map(handleSideMenuList)}
      </List>
    </Box>
  );
}

export default SideBar;
