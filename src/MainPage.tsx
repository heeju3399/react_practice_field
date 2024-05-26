import React from "react";
import { NavLink } from "react-router-dom";

function text(value: string): JSX.Element {
  return <span style={{ fontSize: "30px" }}>{value}</span>;
}

export default function MainPage() {
  const myStyle = { lineHeight: "500%" };
  return (
    <>
      <div style={{ margin: "20px" }}>
        <h2>Router</h2>
        <ul>
          <li style={myStyle}>
            <NavLink to="/heeju_main">{text("heeju react page 1")}</NavLink>
          </li>
          <li style={myStyle}>
            <NavLink to="/heeju_sub">{text("heeju react page 2")}</NavLink>
          </li>
          <li style={myStyle}>
            <NavLink to="/newproject">{text("ssss")}</NavLink>
          </li>
          {/* <NavLink to="/**">**</NavLink> */}
        </ul>
      </div>
    </>
  );
}
