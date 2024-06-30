import * as React from "react";

import { ThemeProvider, Box, Container } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import Stack from "@mui/system/Stack";
import { handleBreakpoints } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import MyDivider from "../../../MyDivider";

function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
      This Box renders as an HTML section element.
    </Box>
  );
}

function BoxSystemProps() {
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
  );
}

function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#007FFF",
            dark: "#0066CC",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
    </ThemeProvider>
  );
}

function SimpleContainer() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>
    </React.Fragment>
  );
}

function FixedContainer() {
  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "10vh" }} />
      </Container>
    </React.Fragment>
  );
}

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

function BasicGrid() {
  return (
    <>
      <Box sx={{ m: "20px" }}>
        <div>
          <h3>grid item 값</h3>
          <p>
            xs: Extra small 화면 크기 (일반적으로 모바일 화면)에서의 그리드
            아이템 크기를 지정합니다.
            <br />
            <br />
            md: Medium 화면 크기 (일반적으로 데스크탑 화면)에서의 그리드 아이템
            <br />
            <br />
            크기를 지정합니다. 즉, 스크린(브라우저)의 너비가
            <br />
            <br />
            0-600px 일때는 xs 값을,
            <br />
            <br />
            600-900px 일때는 sm 값을,
            <br />
            <br />
            900-1200px 일때는 md 값을,
            <br />
            <br />
            1200-1536px 일때는 lg 값을,
            <br />
            <br />
            1563px 이상일 때는 xl 값을
            <br />
            <br /> Grid item의 너비로 채택하겠다는 뜻이다.
          </p>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function FullWidthGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function RowAndColumnSpacing() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function ResponsiveGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} key={index}>
            <Item>{index + 1}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function AutoGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function VariableWidthGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs="auto">
          <Item>Variable width item</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function NestedGrid() {
  const Item = styled("div")(({ theme }) => ({
    border: "1px solid green",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    borderRadius: "4px",
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item>Email subscribe section</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: "12px", textTransform: "uppercase" }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
          sx={{ fontSize: "12px" }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function ColumnsGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <span>
        그냥 그리드의 columns이 총 컬럼 수 하위 8은 각각 들어간다는 뜻같음 를
        정하면 됨
      </span>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

function OffsetGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
        <Item>1</Item>
      </Grid>
      <Grid xs={4} md={2} mdOffset="auto">
        <Item>2</Item>
      </Grid>
      <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
        <Item>3</Item>
      </Grid>
      <Grid xs md={6} mdOffset={2}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
}

function OverflowGrid() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    border: "1px solid",
    borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
    padding: theme.spacing(1),
    borderRadius: "4px",
    textAlign: "center",
  }));

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: 3,
        "& > div": {
          overflow: "auto hidden",
          "&::-webkit-scrollbar": { height: 10, WebkitAppearance: "none" },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            border: "2px solid",
            borderColor: theme.palette.mode === "dark" ? "" : "#E7EBF0",
            backgroundColor: "rgba(0 0 0 / 0.5)",
          },
        },
      })}
    >
      <Box
        sx={{
          width: 200,
        }}
      >
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Item>Scroll bar appears</Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: 200, overflow: "scroll" }}>
        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12}>
            <Item>`disableEqualOverflow` prevents scrollbar</Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function BasicStack() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: 4,
    border: "1px solid blue",
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <p>
        Stack vs. Grid <br />
        스택 대 그리드 Stack은 1차원 레이아웃을 처리하고 Grid는 2차원 레이아웃을
        처리합니다. 기본 방향은 자식을 수직으로 쌓는 열입니다. <br />
        기본방향은 세로
      </p>

      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}

function DirectionStack() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: 4,
    border: "1px solid blue",
  }));

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}

function DividerStack() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: 4,
    border: "1px solid green",
  }));

  return (
    <div>
      <Stack
        direction="row"
        divider={
          <Box
            component="hr"
            sx={{
              border: (theme) =>
                `1px solid ${
                  theme.palette.mode === "dark" ? "#262B32" : "#262B32"
                }`,
            }}
          />
        }
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}

function ResponsiveStack() {
  return (
    <div>
      <p>
        현 방향 direction= xs: 'column', sm: 'row' <br />
        화면크기가 <br />
        xs (600px 이하) 일때는 column <br />
        sm (600-900px 이하) 일때는 row
      </p>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}

function FlexboxGapStack() {
  const Item = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#262B32" : "#fff",
    padding: theme.spacing(1),
    textAlign: "center",
    borderRadius: 4,
    flexGrow: 1,
    border: "1px solid orange",
  }));
  return (
    <Box sx={{ width: 200 }}>
      <span>3개가 딱 맞게 폭을 설정하고 싶을때</span>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Long content</Item>
      </Stack>
    </Box>
  );
}
function ExtendTheSxProp() {
  const customTheme = createTheme({
    unstable_sxConfig: {
      size: {
        style: (props) => {
          const { size, theme } = props;
          const styleFromPropValue = (propValueFinal: number) => {
            const value = theme.spacing(propValueFinal);
            return {
              width: value,
              height: value,
            };
          };

          // Adding support for the breakpoints syntax
          return handleBreakpoints(props, size, styleFromPropValue);
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          size: 10,
          border: 1,
        }}
      />
    </ThemeProvider>
  );
}

declare module "@mui/system" {
  interface Shape {
    sm: number;
    md: number;
    lg: number;
  }
}

function ChangeTheBehaviorSxProp() {
  const theme = createTheme({
    unstable_sxConfig: {
      // You can now use the borderRadius key in sx
      // by providing direct values from the palette
      borderRadius: {
        themeKey: "shape",
      },
    },
    shape: {
      sm: 4,
      md: 8,
      lg: 12,
    },
  });

  return (
    <Stack direction="row" gap={1}>
      <ThemeProvider theme={theme}>
        <Box sx={{ borderRadius: "sm", border: 1, p: 4 }} />
        <Box sx={{ borderRadius: "md", border: 1, p: 4 }} />
        <Box sx={{ borderRadius: "lg", border: 1, p: 4 }} />
      </ThemeProvider>
    </Stack>
  );
}

export default function ComponentsBox() {
  return (
    <>
      <MyDivider title={"Basics"} />
      <BoxBasic />

      <MyDivider title={"Customization  "} />
      <BoxSystemProps />

      <MyDivider title={" BoxSx / With the sx prop "} />
      <BoxSx />

      <MyDivider title={" SimpleContainer "} />
      <SimpleContainer />

      <MyDivider title={" FixedContainer "} />
      <FixedContainer />

      <MyDivider title={" BasicGrid / max 12 "} />
      <BasicGrid />

      <MyDivider title={" FullWidthGrid "} />
      <FullWidthGrid />
      <MyDivider title={" RowAndColumnSpacing "} />
      <RowAndColumnSpacing />

      <MyDivider title={" ResponsiveGrid "} />

      <ResponsiveGrid />

      <MyDivider title={" Grid-Auto-layout "} />
      <AutoGrid />

      <MyDivider title={" VariableWidthGrid "} />
      <VariableWidthGrid />
      <MyDivider title={" Nested Grid "} />
      <NestedGrid />
      <MyDivider title={"Grid-Columns"} />
      <ColumnsGrid />

      <MyDivider title={"Grid-Offset  "} />
      <OffsetGrid />

      <MyDivider title={" Grid - OverflowGrid "} />
      <OverflowGrid />

      <MyDivider title={" Stack - Basics "} />
      <BasicStack />

      <MyDivider title={' DirectionStack - direction="row" '} />
      <DirectionStack />

      <MyDivider title={"DividerStack 이렇게 사용함 "} />
      <DividerStack />

      <MyDivider title={" Responsive values"} />
      <ResponsiveStack />

      <MyDivider title={" FlexboxGapStack "} />
      <FlexboxGapStack />

      <MyDivider title={" Interactive demo"} />
      <div style={{ height: "70px", border: "2px solid " }}>
        <a href="https://mui.com/system/react-stack/#interactive-demo">
          Interactive demo
        </a>
      </div>

      <MyDivider title={" Extend the sx prop "} />
      <ExtendTheSxProp />

      <MyDivider title={" Extend - ChangeTheBehaviorSxProp "} />
      <ChangeTheBehaviorSxProp />
    </>
  );
}
