import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.primary",
  width: "5rem",
  height: "5rem",
};

const commonStyles_color = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

const commonStyles_radius = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "5rem",
  height: "5rem",
};

export default function StyleBorders() {
  return (
    <>
      <Toolbar>
        <Typography variant="h6" component="div">
          style utilities - properties
        </Typography>
      </Toolbar>
      <Box
        height={100}
        width={100}
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{
          border: "2px solid grey",
          boxShadow: "initial",
        }}
      ></Box>
      <h3>border </h3>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, border: 1 }} />
        <Box sx={{ ...commonStyles, borderTop: 1 }} />
        <Box sx={{ ...commonStyles, borderRight: 4 }} />
        <Box sx={{ ...commonStyles, borderBottom: 1 }} />
        <Box sx={{ ...commonStyles, borderLeft: 1 }} />
      </Box>
      <h3>border-color</h3>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles_color, borderColor: "secondary.main" }} />
        <Box sx={{ ...commonStyles_color, borderColor: "primary.main" }} />
        <Box sx={{ ...commonStyles_color, borderColor: "error.main" }} />
        <Box sx={{ ...commonStyles_color, borderColor: "grey.500" }} />
        <Box sx={{ ...commonStyles_color, borderColor: "text.primary" }} />
      </Box>
      <h3>Border-radius</h3>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles_radius, borderRadius: "50%" }} />
        <Box sx={{ ...commonStyles_radius, borderRadius: 1 }} />
        <Box sx={{ ...commonStyles_radius, borderRadius: "16px" }} />
      </Box>
    </>
  );
}
