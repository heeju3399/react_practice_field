import { createContext, useContext } from "react";
import "./index.css";

const themeDefault = { border: "5px solid red" };
const themeContext = createContext(themeDefault);
//기본값 읽어오기

export default function MyUseContextGo() {
  const theme = useContext(themeContext);
  // 이 테마의 값은 뭐가 되냐? createContext의 값이 템이 됨! 왜 전역변수 안쓰고 이걸쓰냐?
  //  sub2 이후에 값만 바꾸고 싶다? 이려면  themecontext.provider 를 사용하면 됨
  // 유즈콘텍스트는 상위 부모 컴포넌트의 themeContext.Provider 를 찾아서 그값을 사용함! 3번째위면 3번째 까지 올라감
  // 반대로  <themeContext.Provider value={{ border: "10px solid orange" }}> 이거 사용한 아래에 useContext 에 적요된 녀석 사용됨
  // 프로 바이터 하위는 다 그걸로 적용 할수 있음!!
  return (
    <>
      <themeContext.Provider value={theme}>
        <h3>설명</h3>
        <p>
          <pre>
            프로 바이터 하위는 다 그걸로 적용 할수 있음!! useContext 사용함
          </pre>
        </p>
        <div className="root99" style={theme}>
          <h1>최상위</h1>
          <Sub1></Sub1>
        </div>
      </themeContext.Provider>
    </>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <>
      {/* <themeContext.Provider value={{ border: "10px solid green" }}> */}
      <div style={theme}>
        <h1>SUB_1</h1>
        <Sub2></Sub2>
      </div>
      {/* </themeContext.Provider> */}
    </>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>SUB_2</h1>
      <Sub3></Sub3>
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <>
      {/* <themeContext.Provider value={{ border: "5px solid blue" }}> */}
      <div style={theme}>
        <h1>SUB_3</h1>
        <Sub4></Sub4>
      </div>
      {/* </themeContext.Provider> */}
    </>
  );
}

function Sub4() {
  const theme = useContext(themeContext);
  return (
    <>
      <div style={theme}>
        <h1>SUB_4</h1>
      </div>
    </>
  );
}
