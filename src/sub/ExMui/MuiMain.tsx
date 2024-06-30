import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import FlexboxMain from "./styleUtilies/styleFlexbox/FlexboxMain";
import StylePalette from "./styleUtilies/styleUtilities/StylePalette";
import StyleOther from "./styleUtilies/styleUtilities/StyleOther";
import StyleDisplay from "./styleUtilies/styleUtilities/StyleDisplay";
import StyleBorders from "./styleUtilies/styleUtilities/StyleBorders";
import ComponentsGrid from "./styleUtilies/styleUtilities/ComponentsGrid";
import ComponentsBox from "./styleUtilies/styleUtilities/ComponentsBox";

function Copyright(props: any) {
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

function FlexBoxNavTitle() {
  return <Typography>Flex Page</Typography>;
}

const styleUtilListItems: tpyeStyleUtilListItems = [
  { id: 0, title: "StylePalette", content: <StylePalette /> },
  { id: 1, title: "StyleOther", content: <StyleOther /> },
  { id: 2, title: "StyleDisplay", content: <StyleDisplay /> },
  { id: 3, title: "StyleBorders", content: <StyleBorders /> },
  { id: 4, title: "ComponentsGrid", content: <ComponentsGrid /> },
  { id: 5, title: "ComponentsBox", content: <ComponentsBox /> },
  { id: 6, title: "FlexBoxNavTitle", content: <FlexBoxNavTitle /> },
  { id: 7, title: "FlexboxMain", content: <FlexboxMain /> },
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
      <Box component="main" sx={{ flexGrow: 1, overflow: "auto", m: "10px" }}>
        {styleUtilListItems[pageIndex].content}
      </Box>
    </>
  );
}

export default function ExMuiMain() {
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
