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
            <NavLink to="/main">{text("page 1 ")}</NavLink>
          </li>
          <li style={myStyle}>
            <NavLink to="/sub">{text("page 2 (sub)")}</NavLink>
          </li>

          {/* <li style={myStyle}>
            <NavLink to="/movieapp">{text("movieApp")}</NavLink>
          </li> */}
          {/* <NavLink to="/**">**</NavLink> */}
        </ul>
      </div>
    </>
  );
}
