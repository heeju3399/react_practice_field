import { useState } from "react";

export default function MoreStateEx1() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  const plus1 = () => {
    setCount2(count2 + 1);
  };
  const miner1 = () => {
    setCount2(count2 - 1);
  };

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { title: "고객에게 메일보내깅", compleeted: false },
    { title: "저녁 미팅2", compleeted: false },
    { title: "집 청소하깅?!!", compleeted: true },
  ]);

  const onChangeMethod = (e) => {
    setText(e.target.value);
    console.log("????????" + text);
  };

  function onClickEvent() {
    setTodos([...todos, { title: text, compleeted: false }]);
  }
  const tempStyle = {
    fontSize: "30px",
  };

  return (
    <>
      <div style={tempStyle}>
        <button onClick={decrease}>--</button>
        <span className="stateEx4">{count}</span>
        <button onClick={increase} className="stateEx4">
          ++
        </button>
        <button onClick={miner1} className="stateEx4">
          --
        </button>
        <span className="stateEx4">{count2}</span>
        <button onClick={plus1} className="stateEx4">
          ++
        </button>
        <hr />
        <h3>할일 목록</h3>
        <input type="text" onChange={onChangeMethod} value={text} />{" "}
        <button onClick={onClickEvent}>할일 추가</button>
        <ul>
          {todos.map((todo) => (
            <li>
              {todo.title} - {todo.compleeted ? "완료" : "진행중"}
            </li>
          ))}
        </ul>
        {/* <ul>
                <li>고객에게 메일 보내기</li>
                <li>저녁 미팅</li>
                <li>집 청소하기</li>
            </ul> */}
      </div>
    </>
  );
}
