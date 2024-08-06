import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function ExPromiss() {
  //   console.log("------------ExPromiss------------");
  //   // 순차적 실행 : sync 동기적 실행
  //   exAwait();
  //   //console.log("1");
  //   //console.log("2");
  //   // console.log("3");
  //   // console.log("4");
  //   // console.log("5");
  //   // 순차적 실행 : async 비동기적 실행
  //   //setTimeout(() => {
  //   //  console.log("3");
  //   //}, 5000);
  //   //console.log("4");
  //   //console.log("5");
  return (
    <>
      <Typography variant="h3">프로미스</Typography>
      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
            `}</pre>
        </p>
      </Box>
    </>
  );
}

// function getData() {
//   return new Promise(function (resolve) {
//     getData();
//   });
// }

// function ExTimer99(time: number) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(time);
//     }, time);
//   });
// }

// //어웨이트 함수
// async function ex22() {
//   console.log("parent - start");
//   const tt = await exxxxx();
//   console.log("parent - end", tt);
// }

// //지저분한 코드 정리!!
// async function exxxxx() {
//   //지저분한 코드 정리!!
//   //console.log("start");
//   // ExTimer99(1000).then(function (time) {
//   //   console.log("time : ", time);
//   //   return ExTimer99(time + 1000).then(function (time) {
//   //     console.log("time : ", time);
//   //     return ExTimer99(time + 1000).then(function (time) {
//   //       console.log("time : ", time);
//   //     });
//   //   });
//   // });
//   console.log("start");

//   let time8 = await ExTimer99(1000);
//   console.log("1 time", time8);
//   time8 = await ExTimer99(time8 + 1000);
//   console.log("2 time", time8);
//   time8 = await ExTimer99(time8 + 1000);
//   console.log("3 time", time8);

//   console.log("end");
//   return time8;
// }

// //await
// async function exAwait() {
//   console.log("11");
//   console.log("22");
//   await new Promise((sucess) => {
//     sucess("ok");
//     setTimeout(() => {
//       console.log("33");
//     }, 1000);
//   });

//   console.log("44");
//   console.log("55");
// }

// async function getData() {
//   console.log("1");
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   const tetch2 = await fetch(url)
//     .then((result) => {
//       //console.log("then :", result.json());
//       //setData(result.json());
//       return result.json();
//     })
//     .catch((reason) => {
//       console.log("reason ", reason);
//     })
//     .then((data) => {
//       console.log("data :", data);
//     });
//   console.log("response ", tetch2);
//   console.log("2");
// }

// // async function getData() {
// //   console.log("1");
// //   const url = "https://jsonplaceholder.typicode.com/posts";
// //   const response = await fetch(url);
// //   console.log("response ", response);
// //   try {
// //     const response = await fetch(url);
// //     console.log("response ", response);

// //     if (!response.ok) {
// //       throw new Error(`Response status: ${response.status}`);
// //     }

// //     const json = await response.json();
// //     console.log(json);
// //   } catch (error) {
// //     console.error(error.message);
// //   }
// // }
