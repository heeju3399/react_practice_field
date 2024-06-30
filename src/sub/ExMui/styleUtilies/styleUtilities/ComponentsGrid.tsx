import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function Display() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.100",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        {"I'm a grid container!"}
      </Box>
    </div>
  );
}

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

function GridTemplateRows() {
  return (
    <div style={{ width: "100%" }}>
      <Box sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Box>
    </div>
  );
}

export default function ComponentsGrid() {
  type typeTitle = {
    title: string;
  };
  const MyDivider = ({ title }: typeTitle) => {
    return (
      <Divider
        sx={{
          fontSize: "2rem",
          m: "30px",
          fontWeight: "bold",
        }}
        flexItem
      >
        {title}
      </Divider>
    );
  };

  return (
    <>
      <Display />
      <MyDivider title={"GridTemplateRows"} />
      <GridTemplateRows />
      <MyDivider title={"gridTemplateColumns: 'repeat(3, 1fr)"} />

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </Box>
      <MyDivider title={"display: 'grid' , gap: 1,"} />
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Box>
      <MyDivider title={"columnGap: 3, rowGap: 1,"} />
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Box>
      <MyDivider title={"gridTemplateColumns: 'repeat(4, 1fr)',gap: 1,"} />
      <Box
        sx={{
          width: "100%",
          height: "140px",
          color: "#fff",
          "& > .MuiBox-root > .MuiBox-root": {
            p: 1,
            borderRadius: 2,
            fontSize: "0.875rem",
            fontWeight: "700",
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            gridTemplateRows: "auto",
            gridTemplateAreas: `"header header header header"
        "main main . sidebar"
        "footer footer footer footer"`,
          }}
        >
          <Box sx={{ gridArea: "header", bgcolor: "primary.main" }}>Header</Box>
          <Box sx={{ gridArea: "main", bgcolor: "secondary.main" }}>Main</Box>
          <Box sx={{ gridArea: "sidebar", bgcolor: "error.main" }}>Sidebar</Box>
          <Box sx={{ gridArea: "footer", bgcolor: "warning.dark" }}>Footer</Box>
        </Box>
      </Box>

      <MyDivider
        title={
          " gridAutoColumns: '1fr',gap: 1 아이템 :gridRow: '1', gridColumn: 'span 2' 아이템 2 : gridRow: '1', gridColumn: '4 / 5' "
        }
      />
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 1,
        }}
      >
        <Item sx={{ gridRow: "1", gridColumn: "span 2" }}>span 2</Item>
        {/* The second non-visible column has width of 1/4 */}
        <Item sx={{ gridRow: "1", gridColumn: "4 / 5" }}>4 / 5</Item>
      </Box>
      <MyDivider title={"gridAutoRows: '40px', gap: 1"} />
      <MyDivider title={"gridColumn: '1', gridRow: 'span 2'"} />
      <MyDivider title={"gridColumn: '1', gridRow: '4 / 5'"} />
      <Box
        sx={{
          display: "grid",
          gridAutoRows: "40px",
          gap: 1,
        }}
      >
        <Item sx={{ gridColumn: "1", gridRow: "span 2" }}>span 2</Item>
        {/* The second non-visible row has height of 40px */}
        <Item sx={{ gridColumn: "1", gridRow: "4 / 5" }}>4 / 5</Item>
      </Box>

      <MyDivider title={"grid-auto-flow"} />
      <p>
        display: 'grid', gridAutoFlow: 'row', gridTemplateColumns: 'repeat(5,
        1fr)', gridTemplateRows: 'repeat(2, 50px)', gap: 1, 아이템 : gridColumn:
        '1', gridRow: '1 / 3', <br />
        아이템 : gridColumn: '5', gridRow: '1 / 3'
      </p>

      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(2, 50px)",
          gap: 1,
        }}
      >
        <Item sx={{ gridColumn: "1", gridRow: "1 / 3" }}>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item sx={{ gridColumn: "5", gridRow: "1 / 3" }}>5</Item>
      </Box>
      <MyDivider title={"end"} />
    </>
  );
}
