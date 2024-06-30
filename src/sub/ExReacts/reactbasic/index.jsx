import { Box, Divider } from "@mui/material";
import MoreStateEx1 from "./MoreStateEx1";
import UseEfecktEx1 from "./UseEfecktEx1";
import UseRef3 from "./useRef";

export default function ReactBaseIndex() {
  return (
    <>
      <Box sx={{ display: "block", fontSize: "2rem" }}>
        <UseRef3 />
        <Divider sx={{ m: "1rem" }}></Divider>
        <MoreStateEx1 />
        <Divider sx={{ m: "2rem" }}></Divider>
        <UseEfecktEx1 />
      </Box>
    </>
  );
}
