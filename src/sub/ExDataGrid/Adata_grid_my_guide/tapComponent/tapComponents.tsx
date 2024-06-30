import "react-data-grid/lib/styles.css";
import { Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
export function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export interface typeLabel {
  label: string;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0.5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
