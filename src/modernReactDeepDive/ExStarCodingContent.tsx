import Box from "@mui/material/Box";
import { exStarCodingItems } from "./ExStarCodingItems";

type typePageIndex = {
  pageIndex: number;
};

export default function ExStarCodingContent({ pageIndex }: typePageIndex) {
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, overflow: "auto", m: "10px", p: "10px" }}
      >
        {exStarCodingItems[pageIndex].content}
      </Box>
    </>
  );
}
