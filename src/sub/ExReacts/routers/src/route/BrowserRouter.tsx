//BrowserRouter는 해당 라우터가 동작할때마다 서버와 통신함
import { Routes, Route, NavLink } from "react-router-dom";
import "./route.css";
export default function BrowserRouterMethod() {
  return (
    <>
      <div style={{ fontSize: "30px" }}>
        <div>Nav Link</div>
        <p>
          class에 active가 붙어서 따라다님... 색을 넣을수도 있고 나의 위치를
          나타낼수 있음 <br />
          <pre>{"<a class='active' href=/sub/Select_D>"}</pre>
          <br /> 이렇게 붙어있음{" "}
        </p>
        <br />
        <p>
          <pre>
            {
              ".active {  background-color: blueviolet;  text-decoration: none;  color: aliceblue;}"
            }{" "}
          </pre>
          <br />
          css에 이렇게 붙여 넣으면 해당 선택자가 선택됨
        </p>
        <p></p>
        <ul>
          <li>
            <NavLink to="Select_A">Select_A</NavLink>
          </li>
          <li>
            <NavLink to="Select_B">Select_B</NavLink>
          </li>
          <li>
            <NavLink to="Select_C">Select_C</NavLink>
          </li>
          <li>
            <NavLink to="Select_D">Select_D</NavLink>
          </li>
        </ul>
        <hr />

        <Routes>
          <Route path="Select_A" element={<div>Select_A</div>} />
          <Route path="Select_B" element={<div>Select_B</div>} />
          <Route path="Select_C" element={<div>Select_C</div>} />
          <Route path="Select_D" element={<div>Select_D</div>} />
        </Routes>
      </div>
    </>
  );
}
