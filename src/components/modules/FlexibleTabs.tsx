import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import SelectableTable from "../organisms/SelectableTable";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function FlexibleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", '& [role="tabpanel"]>div.MuiBox-root': { p: 0 } }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            "& button.MuiButtonBase-root.MuiTab-root": {
              alignItems: "flex-start",
              flex: 1,
            },
          }}>
          <Tab
            label={
              <Stack direction='row' alignItems='center' sx={{ gap: 2 }}>
                <InboxIcon />
                <Typography>기본</Typography>
              </Stack>
            }
            {...a11yProps(0)}
          />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
        </Tabs>
      </Box>

      {/* tables */}
      <TabPanel value={value} index={0}>
        <SelectableTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export default FlexibleTabs;
