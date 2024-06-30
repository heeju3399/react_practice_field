function uuido(a) {
  return 1 + a;
}

export default function MyComp() {
  const a = 10;
  return (
    <>
      <h2>리액트 함수 변수 옵젝트 배열 패쓰</h2>
      <Mychild 드가자={uuido}></Mychild>

      <h2>
        함수를 콜할때에 자식함수에서 사용해도 되고 부모 함수에서 사용해도 됨
      </h2>
      <p>
        <pre>
          {`
          function uuido(a) {
            return 1 + a;
          }
          /////////////////////////////
          <Mychild 드가자={uuido}></Mychild>
          /////////////////
          function Mychild(props) {
            return <h2>Hellow I AM {props.드가자(1200)}</h2>  `}
        </pre>
      </p>
    </>
  );
}

function Mychild(props) {
  return (
    <>
      <div>
        <h2>Hellow I AM {props.드가자(1200)}</h2>
      </div>
    </>
  );
}

// 위 아래 똑같음

// export default function MyComp() {
//   const a = 10;
//   return (
//     <>
//       <h2>리액트 함수 변수 옵젝트 배열 패쓰</h2>
//       <Mychild 드가자={uuido(1000)}></Mychild>
//     </>
//   );
// }

// function Mychild(props) {
//   return (
//     <>
//       <div>
//         <h2>Hellow I AM {props.드가자}</h2>
//       </div>
//     </>
//   );
// }
