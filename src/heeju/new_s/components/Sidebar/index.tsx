import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// MUI
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  SvgIconTypeMap,
  Drawer,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

// Icon imports
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";

interface MenuItem {
  id: number;
  title: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  subMenuItems: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

// mock Data
const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    title: "성도통계",
    icon: SignalCellularAltIcon,
    subMenuItems: [
      { title: "월말성도변동현황", path: "/monthly-members" },
      { title: "서브메뉴 1-2", path: "/submenu1-2" },
      { title: "서브메뉴 1-3", path: "/submenu1-3" },
    ],
  },
  {
    id: 2,
    title: "교적검색",
    icon: SettingsIcon,
    subMenuItems: [
      { title: "서브메뉴 2-1", path: "/submenu2-1" },
      { title: "서브메뉴 2-2", path: "/submenu2-2" },
    ],
  },
  // 추가적인 대메뉴들을 필요에 따라 추가할 수 있습니다.
];

const backgroundColor = "#04A7FC";
const fontColor = "#50C2FD";
const drawerWidth = 280;

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: backgroundColor,
  color: "white",
  textAlign: "left",
  ...theme.typography.body2,
}));

const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "#84D4FE",
  ...theme.typography.body2,
}));

// mock Data 사용 : 나중에 props로 받기
// const Sidebar = ({ menuItems }: SidebarProps) => {
const Sidebar = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMenuItemClick = (path:string) => {
    navigate(path);
  };

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      height: "100vh",
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}>
      <Root>
        {/* 대제목 */}
        <p style={{ fontSize: "1.2rem", textAlign: "center", padding:20 }}
           onClick={() => handleHomeClick()}>
          SCJ 행정시스템
        </p>
        <CustomDivider />

        {/* 관리자 */}
        <div
          style={{
            padding: "0px 10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SupervisorAccountIcon sx={{ marginRight: "8px" }} />
          <p style={{ fontSize: "1.2rem", padding:10 }}>총회관리자</p>
        </div>
        <CustomDivider />

        {/* 관리부서 */}
        <p style={{ color: fontColor, padding:10 }}>행정서무부</p>
      </Root>

      <div style={{ backgroundColor: backgroundColor, height:'100%' }}>
        {mockMenuItems.map((menuItem, index) => (
          <Accordion
            key={menuItem.id}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: backgroundColor,
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              <menuItem.icon sx={{ marginRight: "8px" }} />
              <Typography sx={{ fontSize: "1.2rem" }}>
                {menuItem.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ flexDirection: "column", backgroundColor: backgroundColor }}
            >
              {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                <Typography
                  key={subIndex}
                  sx={{
                    backgroundColor: "white",
                    marginBottom: "1rem",
                    padding: "1.2rem 2rem",
                    textAlign: "left",
                    borderRadius: "7px",
                  }}
                  onClick={() => handleMenuItemClick(subMenuItem.path)}
                >
                  {subMenuItem.title}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
  </Drawer>
  );
};

export default Sidebar;
