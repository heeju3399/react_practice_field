import WeatherData from "./getWeartherData/src/WeatherData";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import SignIn from "./loginpage/src/test/SignIn.tsx";
import AppMovie from "./movies/src/AppMovie.jsx";
import ReactBaseIndex from "./reactbasic/index.jsx";
import 라우터콘텐트안에서 from "./routers/src/라우터콘텐트안에서.tsx";
import 라우터전체페이지 from "./routers/src/라우터전체페이지.tsx";
import HashRouterMethod from "./routers/src/route/HashRouter.tsx";
import BrowserRouterMethod from "./routers/src/route/BrowserRouter.tsx";

type typeSelectedIndexState = {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

type typeSidebarItem = {
  selectedIndex: number;
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
  primary: string;
  index: number;
};

export default function ExReactIndexPage() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box>
          <SelectedListItem
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </Box>
        <Box sx={{ width: "100%", mx: 2 }}>
          <Contents selectedIndex={selectedIndex} />
        </Box>
      </Box>
    </>
  );
}
type typeSelectedIndex = {
  selectedIndex: number;
};

function Contents({ selectedIndex }: typeSelectedIndex) {
  switch (selectedIndex) {
    case 0:
      return <WeatherData />;
    case 1:
      return <SignIn></SignIn>;
    case 2:
      return <AppMovie />;
    case 3:
      return <ReactBaseIndex />;
    case 4:
      return <라우터전체페이지 />;
    case 5:
      return <라우터콘텐트안에서></라우터콘텐트안에서>;
    case 6:
      return <HashRouterMethod></HashRouterMethod>;
    case 7:
      return <BrowserRouterMethod></BrowserRouterMethod>;

    default:
      return <h4>Not Found</h4>;
  }
}

function SelectedListItem({
  selectedIndex,
  setSelectedIndex,
}: typeSelectedIndexState) {
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: 240,
        maxWidth: 260,
        bgcolor: "background.black",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"날씨 DATA 불러오기"}
          index={0}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"로그인 페이지"}
          index={1}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"무비페이지"}
          index={2}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"리엑트"}
          index={3}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"라우터 전체 페이지"}
          index={4}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"라우터 콘텐트 안"}
          index={5}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"해쉬 라우터"}
          index={6}
        />
        <SidebarItem
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          primary={"브라우저 라우터"}
          index={7}
        />
      </List>
    </Box>
  );
}

function SidebarItem({
  selectedIndex,
  handleListItemClick,
  primary,
  index,
}: typeSidebarItem) {
  return (
    <>
      <ListItemButton
        selected={selectedIndex === index}
        onClick={(event) => {
          return handleListItemClick(event, index);
        }}
        sx={{ backgroundColor: selectedIndex === index ? "green" : "white" }}
      >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </>
  );
}
