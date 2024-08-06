import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ExStarCodingNav from "./ExStarCodingNav";
import ExStarCodingContent from "./ExStarCodingContent";
import "./index.css";
import { ClassNames } from "@emotion/react";
import { Container } from "@mui/material";

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
export default function Modern_react_deepdive_Index() {
  const [pageIndex, setPageIndex] = React.useState(0);
  const drawerWidth: number = 230;

  return (
    <>
      {/* <div className="mainDiv">
        <div className="itemDiv">1</div>
        <div className="itemDiv">2</div>
        <div className="itemDiv">3</div>
      </div> */}
      {/* .mainDiv {
  width: 150vh;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 10px solid orange;
}
.itemDiv {
  width: 50px;
  height: 50px;
  border: 5px solid green;
} */}
      <Box
        sx={{
          display: "block",
          width: "80rem",

          margin: "0 auto",
          border: "5px solid green",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        위
        <Box
          sx={{
            alignItems: "center",
            p: 1,
            m: 1,
            border: "5px solid orange",
          }}
        >
          <Box
            sx={{
              border: "5px solid blue",
              width: "100%",
            }}
          >
            {/* Nav */}
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  // position: "relative",
                  whiteSpace: "nowrap",
                  width: drawerWidth,
                  boxSizing: "border-box",
                  border: "10px solid skyblue",
                }}
              >
                <ExStarCodingNav setPageIndex={setPageIndex} />
              </Box>
              {"content"}
              <ExStarCodingContent pageIndex={pageIndex} />
            </Box>
          </Box>
        </Box>
        {/* {"footer"} */}
        <Copyright sx={{ pt: 4 }} />
      </Box>
    </>
  );
}
