import "react-data-grid/lib/styles.css";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import {
  TabPanel,
  a11yProps,
} from "../Adata_grid_my_guide/tapComponent/tapComponents";
import ExSummaryRowsIndex from "../Adata_grid_my_guide/contents/items/ExSummaryRows/Index";
import ExSortIndex from "../Adata_grid_my_guide/contents/items/ExSort/Index";
import ExGridScrollBar from "../Adata_grid_my_guide/contents/items/ExScrollBar";
import ExRowsChange from "../Adata_grid_my_guide/contents/items/ExRowsChange/Index";
import ExPersentBar from "../Adata_grid_my_guide/contents/items/ExPersentBar/Index";
import ExDarkMode from "../Adata_grid_my_guide/contents/items/ExDarkMode/Index";
import ExColumnSetting from "../Adata_grid_my_guide/contents/items/ExColumnSetting/Index";
import ExColumnCss from "../Adata_grid_my_guide/contents/items/ExColumnCss";
import ExColumnGrouping from "../Adata_grid_my_guide/contents/items/ExColumnGrouping";
import ExHeaderFilters from "../Adata_grid_my_guide/contents/items/ExHeaderFilters";
import MyFileterTest from "../Adata_grid_my_guide/contents/items/ExHeaderFilters/myFileterText";
import ExColumnsReordering from "../Adata_grid_my_guide/contents/items/ExAnimation";
import CustomizableRenderers from "../Adata_grid_my_guide/contents/items/ExCustomizableRenderers";

export default function GridDetailMainPage() {
  const [value, setValue] = React.useState(0);

  const TabLabelArr = [
    "SUMMARY_ROW",
    "SORT",
    "SCROLL",
    "CELL_UPDATE",
    "PERSENT_BAR",
    "DARK_MODE",
    "COLUMN_SETTING",
    "Column_Css",
    "Column_Grouping",
    "Header_Filters",
    "My_Dev_Fileter",
    "Animation",
    "Custom_Renderers",
  ];

  const TabComponentsArr = [
    <ExSummaryRowsIndex />,
    <ExSortIndex />,
    <ExGridScrollBar />,
    <ExRowsChange />,
    <ExPersentBar />,
    <ExDarkMode />,
    <ExColumnSetting />,
    <ExColumnCss />,
    <ExColumnGrouping />,
    <ExHeaderFilters />,
    <MyFileterTest />,
    <ExColumnsReordering />,
    <CustomizableRenderers />,
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("GridDetailMainPage", event);
    setValue(newValue);
  };

  return (
    <>
      {/* 전체 */}
      <Box
        sx={{
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        {/* 네비 */}
        <Box
          sx={{
            width: "200px",
            border: "1px solid green",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={{ borderRight: 5, borderColor: "divider", height: "90vh" }}
          >
            {/* 네비 목록 */}
            {TabLabelArr.map((v, i) => {
              return (
                <Tab
                  label={v}
                  {...a11yProps(i)}
                  sx={{ backgroundColor: value === i ? "skyblue" : "white" }}
                />
              );
            })}
          </Tabs>
        </Box>
        {/* 콘텐츠 */}
        <Box
          sx={{
            bgcolor: "background.paper",
            border: "1px solid green",
            flex: "100%",
            overflow: "auto",
            padding: "0",
            margin: "0",
          }}
        >
          {/* 컨텐츠 목록 */}
          {TabComponentsArr.map((v, i) => {
            return (
              <TabPanel value={value} index={i}>
                {v}
              </TabPanel>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
