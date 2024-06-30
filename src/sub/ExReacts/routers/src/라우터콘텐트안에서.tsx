import { Routes, Route, NavLink, useParams } from "react-router-dom";

const contents = [
  { id: 1, title: "content_A", description: "content_A" },
  { id: 2, title: "content_B", description: "content_B" },
  { id: 3, title: "content_C", description: "content_C" },
  { id: 4, title: "content_D", description: "content_D" },
];

function TopicsList2() {
  //한글이기 때문에 이에러가 뜸 expot 해주면 사라짐
  const params = useParams();
  const topic_id = params.incon_id;
  let selected_topic = { title: "Sorry", description: "Not Found" };
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      <span>{selected_topic.description}</span>
    </div>
  );
}

function 라우터콘텐트안에서() {
  const toNavList = [];
  for (let index = 0; index < contents.length; index++) {
    toNavList.push(
      <li key={contents[index].id}>
        <NavLink to={`incontent/${contents[index].id}`}>
          {contents[index].title}
        </NavLink>
      </li>
    );
  }
  return (
    <div style={{ fontSize: "2rem" }}>
      <h2>중첩 라우터</h2>
      <hr />
      <span>중첩 라우터 설정은 *을 꼭 붙여야하며 하위라우터엔 /를 빼야함</span>
      <ul>{toNavList}</ul>
      <hr style={{ marginTop: "1em", marginBottom: "1em" }} />
      <Routes>
        <Route path="incontent/:incon_id" element={<TopicsList2 />}></Route>
      </Routes>
    </div>
  );
}

export default 라우터콘텐트안에서;
