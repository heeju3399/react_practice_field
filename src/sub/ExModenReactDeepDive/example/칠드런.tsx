export default function A칠드런() {
  const object2 = {
    one: "1",
    two: "2",
    three: 3,
  };
  return (
    <>
      <pre>{`props.children`}</pre>

      <div style={{ fontSize: "2rem" }}>
        aaaaaaaaaaaaaaaaaa
        <Content하위함수 name6={"ok"} age={"99살"} ob={object2}>
          아하 이게 칠드런임!!!!!!!!!!!
          <button
            onClick={() => {
              console.log("칠드런");
            }}
          >
            btn임
          </button>
        </Content하위함수>
      </div>
    </>
  );
}

function Content하위함수(props) {
  return (
    <div>
      <div>bbbbbbbbbbbbbbbbbbbbbb</div>
      <h3>props.name : {props.name6}</h3>
      <h3>props.age : {props.age}</h3>
      <h3>props.object : {props.ob.two}</h3>
      {props.children}
    </div>
  );
}

//name={"우간다"} age={"34"}
