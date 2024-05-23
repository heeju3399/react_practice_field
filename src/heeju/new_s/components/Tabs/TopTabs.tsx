import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const TopTabs: React.FC = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#1A90FD",
    },
  });

  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", backgroundColor:"#FFFFFF" }}>
          <TabList
            onChange={handleChange}
            aria-label="tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#1A90FD",
                //fontFamily: 'Noto Sans CJK KR'
                //height: 3, top: "35px"
              },
            }}
          >
            <StyledTab label="총 성도현황(부서별)" value="1" />
            <StyledTab label="총회" value="2" />
            <StyledTab label="교회" value="3" />
            <StyledTab label="입교" value="4" />
            <StyledTab label="교회전체현황" value="5" />
            <StyledTab label="지파부서별현황" value="6" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">총 성도현황(부서별)</TabPanel>
        <TabPanel value="2">총회</TabPanel>
        <TabPanel value="3">교회</TabPanel>
        <TabPanel value="4">입교</TabPanel>
        <TabPanel value="5">교회전체현황</TabPanel>
        <TabPanel value="6">지파부서별현황</TabPanel> */}
      </TabContext>
    </div>
  );
};

export default TopTabs;
