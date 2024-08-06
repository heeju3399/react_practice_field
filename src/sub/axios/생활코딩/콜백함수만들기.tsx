import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ExCallback66() {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          textAlign: "start",
          overflow: "auto",
          m: "10px",
        }}
      >
        <Typography variant="h3">콜백함수 만들기</Typography>
        <br />
        <hr />
        <br />
        <pre>{`
const words = ["spray", "elite", "exuberant", "destruction", "present"];

function myFilter(origin, callback) { 여기서 콜백이 들어감
    let result2 = [];
    for (let index = 0; index < origin.length; index++) {
      const value6 = origin[index];
      if (callback(value6)) {
        result2.push(value6);
        }
    }
    return result2;
}

function callback2(value6) {
    if (value6.length > 6) {
      return true;
    } else {
      return false;
    }
}
/////////////////////start///////////////////////////
const newWords = myFilter(words, callback2); 콜백 사용
console.log("new word ::::", newWords);
return newWords;
          
          `}</pre>
      </Box>
    </>
  );
}

// function ExAxios4() {
//   //자바스크립트는 1급시민이 될조건 은 함수가 매개변수로 들어갈수있는것
//   const val2 = function (ex) {
//     return ex;
//   };

//   function exFn(arg) {
//     arg(); // 나중에 호출된다고 해서 콜백함수라고 함
//   }
//   exFn(val2);

//   //////////////////////

//   function callback2(ele) {
//     if (ele.length > 6) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   const words = ["spray", "elite", "exuberant", "destruction", "present"];
//   let result;
//   // 콜백함수 만들어 보자
//   const newword = words.filter((ele) => {
//     result = ele;
//     if (ele.length > 6) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   //console.log("new : ", newword);
//   const a = B콜백함수만들기();
//   //words.filter(callback);

//   //  const result = words.filter((word) => word.length > 6);

//   //console.log(result);
//   // Expected output: Array ["exuberant", "destruction", "present"]
//   return (
//     <>
//       <Typography>result : {result}</Typography>
//       <Typography>//////////////////</Typography>
//       <Typography>
//         /////////
//         {a.map((v) => v + ",")}
//         /////////
//       </Typography>
//     </>
//   );
// }

// function A콜백함수만들기() {
//   const words = ["spray", "elite", "exuberant", "destruction", "present"];

//   function myFilter(origin, callback) {
//     let result2 = [];
//     for (let index = 0; index < origin.length; index++) {
//       const value6 = origin[index];
//       if (callback(value6)) {
//         result2.push(value6);
//       }
//     }
//     return result2;
//   }

//   function callback2(value6) {
//     if (value6.length > 6) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   const newWords = myFilter(words, callback2);
//   console.log("new word ::::", newWords);
//   return newWords;
// }

// function B콜백함수만들기() {
//   const words = ["spray", "elite", "exuberant", "destruction", "present"];
//   let sixdown = [];
//   const result1 = words.map((v) => {
//     if (v.length > 6) {
//       sixdown.push(v);
//     }
//   });
//   console.log("6보다 작은것 : ", sixdown);

//   //   function myFilter(origin, callback) {
//   //     let result2 = [];
//   //     for (let index = 0; index < origin.length; index++) {
//   //       const value6 = origin[index];
//   //       if (callback(value6)) {
//   //         result2.push(value6);
//   //       }
//   //     }
//   //     return result2;
//   //   }

//   //   function callback2(value6) {
//   //     if (value6.length > 6) {
//   //       return true;
//   //     } else {
//   //       return false;
//   //     }
//   //   }

//   //   const newWords = myFilter(words, callback2);
//   //   console.log("new word ::::", newWords);
//   return sixdown;
// }
