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
import { exStarCodingItems } from "./ExStarCodingItems";

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
          "&:hover": {
            backgroundColor: "yellow",
          },
          //해당 클릭했을때 아이디 가 맞는지 확인후
          backgroundColor: selected === id ? "yellow" : "whtie",
          height: "30px",
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

export default function ExStarCodingNav({ setPageIndex }: TypeNavList) {
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
            별코딩 HOOK
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
          <ListItemText primary="별코딩" />
          {openUtil ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openUtil} timeout="auto" unmountOnExit>
          {exStarCodingItems.map(({ id, title }) => {
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
    </>
  );
}
