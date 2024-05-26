import { Routes, Route } from "react-router-dom";
import HeejuMain from './heeju/HeejuMain.tsx';

import MainPage from './MainPage.tsx';
import SSProject from './heeju/new_s/App.tsx';
import HeejuSub from "./heeju/HJSub.tsx";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/heeju_main" element={<HeejuMain />} /> */}
        <Route path="/heeju_main" element={<HeejuMain />} />
        <Route path="/newproject" element={<SSProject />} />
        <Route path="/heeju_sub" element={<HeejuSub />} />
        {/* <Route path="/**" element={<** />} /> */}

      </Routes>
    </>
  )
}

export default App
