import { Timer } from "@mui/icons-material";

export default function ExAsyncAndSync() {
  ex22();

  return <>{/* <ExCallBackHell></ExCallBackHell> */}</>;
}

//어웨이트 함수
async function ex22() {
  console.log("parent - start");
  const tt = await exxxxx();
  console.log("parent - end", tt);
}

//지저분한 코드 정리!!
async function exxxxx() {
  //지저분한 코드 정리!!
  //console.log("start");
  // ExTimer99(1000).then(function (time) {
  //   console.log("time : ", time);
  //   return ExTimer99(time + 1000).then(function (time) {
  //     console.log("time : ", time);
  //     return ExTimer99(time + 1000).then(function (time) {
  //       console.log("time : ", time);
  //     });
  //   });
  // });
  console.log("start");

  let time8 = await ExTimer99(1000);
  console.log("1 time", time8);
  time8 = await ExTimer99(time8 + 1000);
  console.log("2 time", time8);
  time8 = await ExTimer99(time8 + 1000);
  console.log("3 time", time8);

  console.log("end");
  return time8;
}

function ExCallBackHell() {
  timer(1000, function () {
    console.log("work");
    timer(1000, function () {
      console.log("work");
      timer(1000, function () {
        console.log("work");
      });
    });
  });

  return <>oksk</>;
}

function timer(second, callback) {
  setTimeout(() => {
    callback();
  }, second);
}

function timer2(second) {
  setTimeout(() => {
    console.log("뭐징?");
  }, second);
}

function timer66(time: number) {
  const result = new Promise((res) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
  return result;
}

async function ExAwaitAsync() {
  await timer2(1000);
  console.log("작업1");
  await timer2(1000);
  console.log("작업2");
  await timer2(1000);
  console.log("작업3");
  return <>ExAwaitAsync : {``}</>;
  // 엔 안됨... 왜?
}

function ExPromissTimer() {
  /*
    timer(1000).then(function(){
        console.log('작업');
        return timer(1000);
    })
    .then(function(){
        console.log('작업');
        return timer(1000);
    })
    .then(function(){
        console.log('작업');
        return timer(1000);
    })    
    */
  //이렇게도 된다!!
}

function ExTimer99(time: number) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
