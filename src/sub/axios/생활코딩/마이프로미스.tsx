import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function ExMyPromise() {
  //   let job1 = new Promise((성공, 실패) => {
  //     setTimeout(() => {
  //       성공("oksk");
  //     }, 2000);
  //   });
  //   job1
  //     .then((data) => {
  //       console.log("data11", data);
  //     })
  //     .catch((data) => {
  //       console.log("data22", data);
  //     });

  //네이스틱 방식
  //   job22().then((data) => {
  //     console.log("data11", data);
  //     job33().then((data) => {
  //       console.log("data11", data);
  //     });
  //   });

  // 좀더 보기 좋은 다른방식으로 리턴
  job22()
    .then((data) => {
      console.log("오라이1", data);
      return job33();
    })
    .catch((resone) => {
      console.log("reson", resone);
      return Promise.reject(); // <- 넣어주면 then 안가고 바로 종료됨
    })
    .then((data) => {
      console.log("오라이2", data);
    });

  return (
    <>
      <Typography variant="h3">ExMyPromise</Typography>
      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
           < 네이스틱 방식 >
  job22().then((data) => {
    console.log("data11", data);
    job33().then((data) => {
      console.log("data11", data);
    });
  });
          `}</pre>
        </p>
      </Box>
      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
        < 좀더 보기 좋은 다른방식으로 리턴 >
  job22()
    .then((data) => {
      console.log("오라이1", data);
      return job33();
    })
    .catch((resone) => {
      console.log("reson", resone);
      return Promise.reject(); // <- 넣어주면 then 안가고 바로 종료됨
    })
    .then((data) => {
      console.log("오라이2", data);
    });
          `}</pre>
        </p>
      </Box>

      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
function job22() {
  const job1 = new Promise((성공, 실패) => {
    setTimeout(() => {
      실패("job22 fail");
    }, 2000);
  });

  return job1;
}
          `}</pre>
        </p>
      </Box>

      <Box sx={{ textAlign: "start", fontSize: "2rem" }}>
        <hr />
        <p>
          <pre>{`
function job33() {
  const job1 = new Promise((성공, 실패) => {
    setTimeout(() => {
      성공("job33 ok");
    }, 2000);
  });

  return job1;
}
          `}</pre>
        </p>
      </Box>
    </>
  );
}
// 대개 펑션안에서 프로미스를 리턴해줌

function job22() {
  const job1 = new Promise((성공, 실패) => {
    setTimeout(() => {
      실패("job22 fail");
    }, 2000);
  });

  return job1;
}

function job33() {
  const job1 = new Promise((성공, 실패) => {
    setTimeout(() => {
      성공("job33 ok");
    }, 2000);
  });

  return job1;
}
