import * as React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ExUseContext from "./ExUseContext";
import ExUseReDucer from "./Exusereducer";
import ExRedux from "./index";
import 유즈콘텍스트사용해보기 from "./유즈콘텍스트사용해보기";
import 유즈리덕설사용해보기 from "./유즈리덕설사용해보기";
import Box from "@mui/material/Box";

type TypeNavListItem = {
  id: number;
  title: string;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

type TypeNavList = {
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
};

function NavListItem({ id, title, setPageIndex }: TypeNavListItem) {
  return (
    <>
      <List
        component="div"
        disablePadding
        sx={{
          "&:hover": {
            backgroundColor: "yellow",
          },
          height: "30px",
        }}
        onClick={() => {
          console.log("title : ", title, id);
          setPageIndex(id);
        }}
      >
        <ListItemButton
          sx={{
            textAlign: "center",
            border: "1px solid ",
            m: "1px",
            height: "30px",
          }}
        >
          <ListItemText primary={title} />
        </ListItemButton>
      </List>
    </>
  );
}

export default function ExLifeCodingMain() {
  const [openUtil, setUtilOpen] = React.useState(true);
  const handleUtilClick = () => {
    setUtilOpen(!openUtil);
  };

  const [pageIndex, setPageIndex] = React.useState(0);
  const drawerWidth: number = 230;

  const arrayList = [
    { id: 0, title: "ExUseContext", content: <ExUseContext /> },
    { id: 1, title: "ExUseReDucer", content: <ExUseReDucer /> },
    { id: 2, title: "Real_ExRedux_!!", content: <ExRedux /> },
    {
      id: 3,
      title: "유즈콘텍스트사용해보기",
      content: <유즈콘텍스트사용해보기 />,
    },
    { id: 4, title: "유즈리덕설사용해보기", content: <유즈리덕설사용해보기 /> },
  ];

  return (
    <>
      <List
        sx={{ bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nav-list"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            생활코딩 리덕스
          </ListSubheader>
        }
      >
        <ListItemButton
          onClick={handleUtilClick}
          sx={{ border: "1px solid black", bgcolor: "#ffeb3b" }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="생활코딩 리덕스" />
          {openUtil ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUtil} timeout="auto" unmountOnExit>
          {arrayList.map(({ id, title }) => {
            return (
              <NavListItem
                key={id}
                id={id}
                title={title}
                setPageIndex={setPageIndex}
              />
            );
          })}
        </Collapse>
      </List>

      <Box
        component="main"
        sx={{ flexGrow: 1, overflow: "auto", m: "10px", p: "10px" }}
      >
        {arrayList[pageIndex].content}
      </Box>
    </>
  );
}
