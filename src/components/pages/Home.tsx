import { Stack } from "@mui/material";
import React from "react";
import Content from "../modules/Content";
import Header from "../organisms/Header";
import SideBar from "../organisms/SideBar";
import TopBar from "../organisms/TopBar";
import InboxIcon from "@mui/icons-material/Inbox";
import ReportIcon from "@mui/icons-material/Report";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SendIcon from "@mui/icons-material/Send";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarIcon from "@mui/icons-material/Star";
import FlexibleTabs from "../modules/FlexibleTabs";

const sideMenuList = [
  {
    icon: <InboxIcon />,
    title: "받은편지함",
  },
  {
    icon: <StarIcon />,
    title: "별표편지함",
  },
  {
    icon: <LabelImportantIcon />,
    title: "중요편지함",
  },
  {
    icon: <SendIcon />,
    title: "보낸편지함",
  },
  {
    icon: <InsertDriveFileIcon />,
    title: "임시보관함",
  },
  {
    icon: <ReportIcon />,
    title: "스팸함",
  },
];

function Home() {
  return (
    <Stack
      sx={{
        height: "100%",
      }}>
      <TopBar />
      <Stack
        direction='row'
        sx={{
          flex: 1,
        }}>
        <SideBar sideMenuList={sideMenuList} />
        <Stack sx={{ flex: 1 }}>
          <Header />
          <Content />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
