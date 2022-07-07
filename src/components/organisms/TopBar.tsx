import { Box, IconButton, Stack } from "@mui/material";
import React from "react";
import Logo from "../atoms/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from "../modules/SearchInput";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Buttons from "../modules/Buttons";

const buttonList = [<HelpOutlineIcon />, <SettingsIcon />, <AppsIcon />];

function TopBar() {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        p: 1,
        gap: 2,
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        borderBottomStyle: "solid",
        zIndex: 100,
        background: "#fff",
      }}>
      <Stack
        direction='row'
        alignItems='center'
        sx={{
          gap: 7,
        }}>
        <Stack
          direction='row'
          alignItems='center'
          sx={{
            gap: 2,
          }}>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Logo
            src={
              "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            }
            width={109}
            height={40}
          />
        </Stack>
        <SearchInput />
      </Stack>
      <Buttons buttonList={buttonList} />
    </Stack>
  );
}

export default TopBar;
