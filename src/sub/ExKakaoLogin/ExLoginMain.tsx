//이건 백엔드에서 하는거임

import { Button, Typography } from "@mui/material";
import { CLIENT_ID } from "./key.json";

export default function ExLoginMain() {
  const BASE_URL = "https://kauth.kakao.com/oauth/authorize";
  //const CLIENT_ID = "client_id=${ac17a0517b659e139a1cfab6d5fd58ac}";
  const REDIRECT_URI = "redirect_uri=${REDIRECT_URI}";
  const RESPONSE_TYPE = "response_type=code";
  const URL = `${BASE_URL}?${CLIENT_ID}&${REDIRECT_URI}&${RESPONSE_TYPE}`;

  return (
    <>
      <br />
      {/* <p>URL : {URL}</p> */}
      {/* 아 안된다 이게 서버가 있어야함.. 음... 노드 서버로 해야하는것 같음 */}
      <br />
      <Button component="button" href={URL} sx={{ fontSize: "2rem" }}>
        KAKAO LOGIN
      </Button>
    </>
  );
}
