import {
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import OptionButton from "../modules/OptionButton";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OptionBox from "../modules/OptionBox";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface IconMenu {
  name: string;
  icon: React.ReactElement;
}

const options = [
  "Create a merge commit",
  "Squash and merge",
  "Rebase and merge",
];

const buttonList = [
  [
    {
      name: "보관처리",
      icon: <MoveToInboxIcon />,
    },
    {
      name: "스팸신고",
      icon: <ReportIcon />,
    },
    {
      name: "삭제",
      icon: <DeleteIcon />,
    },
  ],
  [
    {
      name: "읽지 않은 상태로 표시",
      icon: <EmailIcon />,
    },
    {
      name: "다시 알림",
      icon: <AccessTimeFilledIcon />,
    },
    {
      name: "Tasks에 추가",
      icon: <AddTaskIcon />,
    },
  ],
  [
    {
      name: "이동",
      icon: <DriveFileMoveIcon />,
    },
    {
      name: "라벨",
      icon: <LabelIcon />,
    },
    {
      name: "더보기",
      icon: <MoreVertIcon />,
    },
  ],
];

function Header() {
  const handleButtonList = (buttons: IconMenu[], idx: number) => (
    <Fragment key={idx}>
      {buttons.map(({ name, icon }: IconMenu) => (
        <Tooltip key={name} title={name}>
          <IconButton
            size='medium'
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 24,
              },
            }}>
            {icon}
          </IconButton>
        </Tooltip>
      ))}
      {idx !== buttons.length - 1 && (
        <Divider orientation='vertical' variant='middle' flexItem />
      )}
    </Fragment>
  );

  return (
    <Stack direction='row' justifyContent='space-between'>
      <Stack direction='row'>
        <OptionBox
          icon={<Checkbox size='small' sx={{ px: 0.3 }} />}
          options={options}
        />
        {buttonList.map(handleButtonList)}
      </Stack>
      <Stack direction='row' alignItems='center'>
        <Typography variant='body2' color='GrayText'>
          705개 중 1-50
        </Typography>
        <IconButton>
          <ArrowBackIosNewIcon
            sx={{
              fontSize: 12,
            }}
          />
        </IconButton>
        <IconButton>
          <ArrowBackIosNewIcon
            sx={{
              fontSize: 12,
              transform: "rotate(180deg)",
            }}
          />
        </IconButton>
        <OptionButton icon={<VerticalSplitIcon />} options={options} />
        <OptionButton icon={<KeyboardIcon />} options={options} />
      </Stack>
    </Stack>
  );
}

export default Header;
