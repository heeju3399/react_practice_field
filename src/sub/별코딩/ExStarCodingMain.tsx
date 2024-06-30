import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ExStarCodingNav from "./ExStarCodingNav";
import ExStarCodingContent from "./ExStarCodingContent";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        mui참고
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// MAIN
export default function ExStarCodingMain() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const drawerWidth: number = 230;

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            boxSizing: "border-box",
          }}
        >
          <ExStarCodingNav setPageIndex={setPageIndex} />
        </Box>
        <ExStarCodingContent pageIndex={pageIndex} />
      </Box>
      <Copyright sx={{ pt: 4 }} />
    </Box>
  );
}
