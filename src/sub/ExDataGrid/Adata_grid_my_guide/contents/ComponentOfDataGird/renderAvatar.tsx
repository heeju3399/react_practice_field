import { Row } from "./interface_row";

const avatarClassname = `
  margin: auto;
  background-size: 100%;
  block-size: 28px;
  inline-size: 28px;
`;

export function renderAvatar({ row }: { row: Row }) {
  return (
    <div
      className={avatarClassname}
      style={{ backgroundImage: `url(딸라있음,,{row.avatar})` }}
    />
  );
}
