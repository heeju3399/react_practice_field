import ClassVsFuntion from "./example/ExClassVsFuntion.tsx";
import ClassComponent from "./example/클래스컴포넌트란.tsx";
import MyComp from "./example/리액트함수변수옵젝트배열패쓰.tsx";
import A칠드런 from "./example/칠드런.tsx";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        mui참고
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

type tpyeStyleUtilListItems = {
  id: number;
  title: string;
  content: JSX.Element;
}[];

const styleUtilListItems: tpyeStyleUtilListItems = [
  { id: 0, title: "칠드런설명", content: <A칠드런 /> },
  { id: 1, title: "ClassVsFuntion", content: <ClassVsFuntion /> },
  { id: 2, title: "ClassComponent", content: <ClassComponent /> },
  { id: 3, title: "MyComp", content: <MyComp /> },
];

type TypeNavListItem = {
  id: number;
  title: string;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

type TypeNavList = {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};
let selected = 0;
function NavListItem({ id, title, setPageIndex }: TypeNavListItem) {
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
          selected = id;
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
            backgroundColor: selected === id ? "yellow" : "white",
          }}
        >
          <ListItemText primary={title} />
        </ListItemButton>
      </List>
    </>
  );
}

function Nav({ setPageIndex }: TypeNavList) {
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
            MuiStyleUtilties
          </ListSubheader>
        }
      >
        <ListItemButton sx={{ bgcolor: "yellow" }} onClick={handleUtilClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="style utilities" />
          {openUtil ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUtil} timeout="auto" unmountOnExit>
          {styleUtilListItems.map(({ id, title }) => {
            return (
              <NavListItem id={id} title={title} setPageIndex={setPageIndex} />
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

function ContentMain({ pageIndex }: typePageIndex) {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, overflow: "auto", m: "30px" }}>
        {styleUtilListItems[pageIndex].content}
      </Box>
    </>
  );
}

export default function ExModenReactDeepDive() {
  const [pageIndex, setPageIndex] = React.useState(0);
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
          <Nav setPageIndex={setPageIndex} />
        </Box>
        <ContentMain pageIndex={pageIndex} />
      </Box>
      <Copyright sx={{ pt: 4 }} />
    </Box>
  );
}
