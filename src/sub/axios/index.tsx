import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ExCallback66 from "./생활코딩/콜백함수만들기";
import ExPromiss from "./생활코딩/프로미스";
import ExAsyncAndSync from "./생활코딩/비동기동기";
import ExMyPromise from "./생활코딩/마이프로미스";
import ExPromiseAllAndRace from "./생활코딩/프로미스올레이스";
import ExMyMy from "./생활코딩/mymy";

const styleUtilListItems: tpyeStyleUtilListItems = [
  { id: 0, title: "ExCallback", content: <ExCallback66 /> },
  { id: 1, title: "ExPromiss", content: <ExPromiss /> },
  { id: 2, title: "ExAsyncAndSync", content: <ExAsyncAndSync /> },
  { id: 3, title: "ExMyPromise", content: <ExMyPromise /> },
  { id: 4, title: "ExPromiseAllAndRace", content: <ExPromiseAllAndRace /> },
  { id: 5, title: "await call", content: <ExMyMy /> },
];

function ExMain() {
  const [pageIndex, setPageIndex] = React.useState(1);
  const drawerWidth: number = 220;

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            boxSizing: "border-box",
          }}
        >
          <Nav pageIndex={pageIndex} setPageIndex={setPageIndex} />
        </Box>
        <ContentMain pageIndex={pageIndex} />
      </Box>
    </Box>
  );
}

type TypeNavListItem = {
  id: number;
  title: string;
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

type TypeNavList = {
  pageIndex: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

function NavListItem({ id, title, pageIndex, setPageIndex }: TypeNavListItem) {
  return (
    <>
      <List
        component="div"
        disablePadding
        sx={{
          height: "2em",
          color: "ButtonText",
          bgcolor: "ButtonFace",
        }}
        onClick={() => {
          console.log("title : ", title, id);
          pageIndex = id;
          setPageIndex(id);
        }}
      >
        <ListItemButton
          sx={{
            textAlign: "center",
            border: "1px solid red",
            m: "5px",
            height: "2em",
            bgcolor: "AppWorkspace",
            color: "ButtonText",
            backgroundColor: pageIndex === id ? "yellow" : "white",
          }}
        >
          <ListItemText primary={title} />
        </ListItemButton>
      </List>
    </>
  );
}

function Nav({ setPageIndex, pageIndex }: TypeNavList) {
  const [openUtil, setUtilOpen] = React.useState(true);
  const handleUtilClick = () => {
    setUtilOpen(!openUtil);
  };

  return (
    <>
      <List
        sx={{ bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nav-list"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            callback, async, await, promise
          </ListSubheader>
        }
      >
        <ListItemButton sx={{ bgcolor: "yellow" }} onClick={handleUtilClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="자바스크립트" />
          {openUtil ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUtil} timeout="auto" unmountOnExit>
          {styleUtilListItems.map(({ id, title }) => {
            return (
              <NavListItem
                id={id}
                title={title}
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
              />
            );
          })}
        </Collapse>
      </List>
    </>
  );
}

type typePageIndex = {
  pageIndex: number;
};

type tpyeStyleUtilListItems = {
  id: number;
  title: string;
  content: JSX.Element;
}[];

function ContentMain({ pageIndex }: typePageIndex) {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          overflow: "auto",
          m: "10px",
        }}
      >
        {styleUtilListItems[pageIndex].content}
      </Box>
    </>
  );
}

export default function ExAxios() {
  return (
    <>
      <ExMain></ExMain>
    </>
  );
}
