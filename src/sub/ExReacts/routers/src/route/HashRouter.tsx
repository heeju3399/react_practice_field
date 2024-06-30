//BrowserRouter는 해당 라우터가 동작할때마다 서버와 통신하지 않음
//동작은 빠르나 구글검색에서 웹페이지가 검색이 잘안된다고 함

import { Routes, Route, Link } from "react-router-dom";

export default function HashRouterMethod() {
  return (
    <>
      <div>HashRouter </div>
      <p style={{ color: "green" }}>
        BrowserRouter는 해당 라우터가 동작할때마다
        <br /> 서버와 통신하지 않음
        <br /> 동작은 빠르나 구글검색에서 웹페이지가 검색이 잘안된다고 함
        <br />
        그래서 해쉬 라우터
      </p>
      <hr />
      <h2>라우터</h2>
      <div
        style={{
          margin: "2em",
          padding: "2em",
          fontSize: "2em",
          border: "1px solid red",
        }}
      >
        <Routes>
          <Route path="nono2" element={<span>not ff</span>} />
          <Route path="home2" element={<span>home2</span>} />
          <Route path="tos2" element={<span>tos2</span>} />
          <Route path="contact2" element={<span>contact2</span>} />
        </Routes>
      </div>

      <hr />
      <div>비동기적으로 페이지 로드 LI</div>
      <ul>
        <li>
          <Link to="nono2">notFF</Link>
        </li>
        <li>
          <Link to="tos2">topics</Link>
        </li>
        <li>
          <Link to="contact2">contacte</Link>
        </li>
        <li>
          <Link to="home2">home</Link>
        </li>
      </ul>
      <hr />
    </>
  );
}
