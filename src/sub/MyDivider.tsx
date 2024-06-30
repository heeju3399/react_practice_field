import Divider from "@mui/material/Divider";

type typeTitle = { title: string };

export default function MyDivider({ title }: typeTitle) {
  return <Divider sx={{ fontSize: "2rem", m: "20px" }}>{title}</Divider>;
}
