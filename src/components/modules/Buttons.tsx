import { Avatar, IconButton, Stack } from "@mui/material";
import React from "react";

interface ButtonsProps {
  buttonList: React.ReactElement[];
}

interface AvatarProps {
  src: string;
  alt: string;
}

const avatar: AvatarProps = {
  src: "https://lh3.googleusercontent.com/ogw/ADea4I55DKaBW9Mv-YbchLYwqmL50WVGXqAf8v7WQ5dbmg=s32-c-mo",
  alt: "",
};

function Buttons({ buttonList }: ButtonsProps) {
  return (
    <Stack direction='row' alignItems='center' sx={{ gap: 0.5 }}>
      {buttonList.map((button, idx) => (
        <IconButton key={idx}>{button}</IconButton>
      ))}
      <Avatar
        alt={avatar.alt}
        src={avatar.src}
        sx={{
          width: 32,
          height: 32,
        }}
      />
    </Stack>
  );
}

export default Buttons;
