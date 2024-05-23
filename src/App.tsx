import { Routes, Route } from "react-router-dom";
import HeejuMain from './heeju/HeejuMain.tsx';

import MainPage from './MainPage.tsx';
import 신교적메인 from './heeju/new_s/App.tsx';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/heeju_main" element={<HeejuMain />} /> */}
        <Route path="/heeju_main" element={<HeejuMain />} />
        <Route path="/newproject" element={<신교적메인 />} />
        {/* <Route path="/heeju_sub" element={<HeejuSub />} /> */}
        {/* <Route path="/**" element={<** />} /> */}

      </Routes>
    </>
  )
}

export default App
