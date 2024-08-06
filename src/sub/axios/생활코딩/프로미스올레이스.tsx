import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ExPromiseAllAndRace() {
  Promise.all([timer(1000), timer(2000), timer(3000)]).then((result) => {
    console.log("result", result);
    console.timeEnd("answer time");
  });
  return (
    <>
      <Typography variant="h4">ExPromiseAllAndRace</Typography>
      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
           < 프로미스 올방식, 배열안에있는 프로미스가 모두 끝나야 result 동작함 >
  Promise.all([timer(1000), timer(2000), timer(3000)])
    .then((result) => {
    console.log("result", result);
    console.timeEnd("Promise.all");
  });
          `}</pre>
        </p>
      </Box>

      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
           < 프로미스 레이스 방식 , 배열안에있는 프로미스중에 
                                   가장먼저 끝나는것이 있으면 result 동작함 >
  Promise.race([timer(1000), timer(2000), timer(3000)])
    .then((result) => {
    console.log("result", result);
    console.timeEnd("Promise.race");
  });
          `}</pre>
        </p>
      </Box>
    </>
  );
}

function timer(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
