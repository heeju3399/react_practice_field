import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExStarCodingMain from "./별코딩/ExStarCodingMain";
import ExLifeCodingMain from "./생활코딩리덕스/ExLifeCodingMain";
import ExLoginMain from "./ExKakaoLogin/ExLoginMain";
import ExMuiMain from "./ExMui/MuiMain";
import ExReactIndexPage from "./ExReacts";
import ExModenReactDeepDive from "./ExModenReactDeepDive";
import Adata_grid_my_guide_main from "./ExDataGrid/Adata_grid_my_guide/Index";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function ExSubMain() {
  const [value, setValue] = useState(9);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ mx: "1rem" }}>
        <Box
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            <Tab label="home" href="/" />
            <Tab label="별코딩" />
            <Tab label="생활코딩" />
            <Tab label="Mui-Style" />
            <Tab label="axio" />
            <Tab label="React" />
            <Tab label="data-grid" />
            <Tab label="Api" />
            <Tab label="KAKAO_LOGIN" />
            <Tab label="모던-리액트-책" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}></CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ExStarCodingMain />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ExLifeCodingMain />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ExMuiMain />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          axio page
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <ExReactIndexPage />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <Adata_grid_my_guide_main />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
          axio
        </CustomTabPanel>
        <CustomTabPanel value={value} index={8}>
          <ExLoginMain />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={9}>
          <ExModenReactDeepDive />
        </CustomTabPanel>
      </Box>
    </>
  );
}
