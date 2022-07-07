import { Stack } from "@mui/material";
import React from "react";
import SelectableTable from "../organisms/SelectableTable";
import FlexibleTabs from "./FlexibleTabs";

function Content() {
  return (
    <Stack sx={{ height: "100%" }}>
      <FlexibleTabs />
      
    </Stack>
  );
}

export default Content;
