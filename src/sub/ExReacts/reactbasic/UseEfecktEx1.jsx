import { useEffect, useState } from "react";

export default function UseEfecktEx1() {
  const [todos, setTodos] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "처음엔 useEffect에 기본데이터 저장후 데이터 가져오기 클릭시 fetch활용 // jsonplaceholder 여기서 가져오기 ",
      completed: false,
    },
  ]);

  useEffect(() => {
    //getData();
  }, []);

  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await res.json();
    console.log(json);
    setTodos(json);
  }

  function onClickEvent() {
    getData();
  }

  return (
    <>
      <p>데이터 fetching 과 useEffect 훅</p>
      <hr />
      <button
        style={{
          color: "black",
          backgroundColor: "yellow",
          fontSize: "2rem",
          margin: "1rem",
          padding: "1rem",
        }}
        onClick={onClickEvent}
      >
        데이터 가져오기
      </button>
      <p>할일 목록</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            NO({todo.id}){todo.title}-{todo.completed ? "환료" : "진행중"}
          </li>
        ))}
      </ul>
    </>
  );
}
