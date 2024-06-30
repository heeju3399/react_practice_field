import { useState } from "react";

export default function ExUseState() {
  const havyWork = () => {
    console.log("엄청무거운 작업");
    return ["길동", "청수"];
  };
  const [names, setName] = useState(() => {
    return havyWork();
  }); //한번만 랜더링 됨이거 안하면 계속 렌더링
  const [input, setInput] = useState("");

  const hableInputCheck = (e: any) => {
    setInput(e.target.value);
  };
  const handleUpload = () => {
    setName((preState) => {
      console.log("pre stte : ", preState);
      return [input, ...preState];
    });
  };

  return (
    <>
      <h2>ExUseState</h2>
      <input type="text" value={input} onChange={hableInputCheck} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </>
  );
}
