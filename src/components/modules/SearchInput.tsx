import {
  Box,
  IconButton,
  Paper,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useInputToggle from "../../hooks/useInputToggle";
import TuneIcon from "@mui/icons-material/Tune";

const History = styled(Paper)(({}) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  background: "#fff",
  zIndex: 0,
}));

function SearchInput() {
  const [toggle, setToggle, handleFocus, handleBlur] = useInputToggle(false);

  return (
    <Stack
      justifyContent='center'
      sx={{
        background: "#f1f1f1",
        position: "relative",
        zIndex: 5,
        px: 1,
        py: 0.5,
        borderRadius: 2,
      }}>
      <Stack direction='row' alignItems='center'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <TextField
          onFocus={handleFocus}
          onBlur={handleBlur}
          variant='outlined'
          sx={{
            width: 350,
            "& input": {
              padding: 0,
            },
            "& fieldset.MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          placeholder='메일 검색'
        />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </Stack>
      {toggle && <History elevation={5}>test</History>}
    </Stack>
  );
}

export default SearchInput;
