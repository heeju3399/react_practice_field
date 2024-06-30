//BrowserRouter는 해당 라우터가 동작할때마다 서버와 통신함
import { NavLink } from "react-router-dom";

export default function 라우터전체페이지() {
  return (
    <>
      <div style={{ fontSize: "2em" }}>
        <div>Hello React Router DOM</div>
        {/* <ul>
                <li><a href="/topics">topics</a></li>
                <li><a href="/">notFF</a></li>
                <li><a href="/contact">contacte</a></li>
                <li><a href="/home">home</a></li>
            </ul>
            <hr /> */}

        {/* 비동기적으로 하느는법 */}
        {/* <hr />
            <div>비동기적으로 페이지 로드 LI</div>
            <ul>
                <li><Link to="/">notFF</Link></li>
                <li><Link to="/topics">topics</Link></li>
                <li><Link to="/contact">contacte</Link></li>
                <li><Link to="/home">home</Link></li>
            </ul>
            <hr /> */}

        <div>Nav Link</div>
        <ul>
          <li>
            <NavLink to="notfound">NOT FOUND</NavLink>
          </li>
          <li>
            <NavLink to="topics">TOPIC</NavLink>
          </li>
          <li>
            <NavLink to="contact">CONTENT</NavLink>
          </li>
          <li>
            <NavLink to="home">HOME</NavLink>
          </li>
          <span>
            class에 active가 붙어서 따라다님... 색을 넣을수도 있고 나의 위치를
            나타낼수 있음
          </span>
        </ul>
        <hr />
      </div>
    </>
  );
}
