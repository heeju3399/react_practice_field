import { Routes, Route } from "react-router-dom";
import HeejuMain from "./heeju/HeejuMain.tsx";
import MainPage from "./MainPage.tsx";

import ExSubMain from "./sub/ExSubMain.tsx";
import Home from "./sub/ExReacts/routers/src/page/Home.tsx";
import Topics from "./sub/ExReacts/routers/src/page/Topics.tsx";
import Contact from "./sub/ExReacts/routers/src/page/Contact.tsx";
import Notfound from "./sub/ExReacts/routers/src/page/Notfound.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/heeju_main" element={<HeejuMain />} /> */}
        <Route path="/main" element={<HeejuMain />} />

        {/* <Route path="/sub" element={<ExSubMain />} /> */}
        {/* 이렇게 넣으면 새페이지에서 나옴.. */}
        <Route path="/sub/home" element={<Home></Home>} />
        <Route path="/sub/topics/*" element={<Topics></Topics>} />
        <Route path="/sub/contact" element={<Contact></Contact>} />
        <Route path="/sub/contact" element={<Contact></Contact>} />
        <Route path="/sub/notfound" element={<Notfound></Notfound>} />
        {/* 이렇게 넣으면 새페이지에서 나옴.. */}
        {/* <Route
          path="/sub/incontent/*"
          element={<라우터콘텐트안에서></라우터콘텐트안에서>}
        /> */}
        {/* <Route path="/sub/incontent/*" element={<ExSubMain />} /> */}
        <Route path="/sub/*" element={<ExSubMain />} />
        {/* 아 중첩사용할라면 여기에 메인을 박아야함 */}

        {/* <Route path="/**" element={<** />} /> */}
      </Routes>
    </>
  );
}

export default App;
