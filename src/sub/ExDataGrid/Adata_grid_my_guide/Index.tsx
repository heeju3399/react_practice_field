import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "../Adata_grid_my_guide/tapComponent/tapComponents";
import BasicDemoCommonFeatures from "../Adata_grid_my_guide/basicDemoMainPage";
import GridDetailMainPage from "../Adata_grid_my_guide/gridDetailMainPage";

export default function Adata_grid_my_guide_main() {
  //const direction = 'ltr' | 'rtl'; //방향이라고 하는데 무슨뜻이지?
  // LTR은 왼쪽에서 오른쪽으로 글자를 읽는 것이다. 대부분의 국가가 LTR 방식을 쓰고 있다.
  // RTL은 오른쪽에서 왼쪽으로 글자를 읽는 것이다. 단어를 쓰는 방향은 LTR과 같다(Hello는 Hello로 쓴다). 읽는 방향만 다른 것이다. 아랍권 국가에서 RTL 방식을 쓰고 있다.

  const direction = "ltr";
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "1100px" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs "
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="secondary"
          allowScrollButtonsMobile
        >
          <Tab label="basic demo" />
          <Tab label="DataGrid-Detail" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BasicDemoCommonFeatures direction={direction} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GridDetailMainPage />
      </TabPanel>
    </Box>
  );
}
