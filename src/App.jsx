import PreJogo from "./pages/preJogo";
import Jogo from "./pages/jogo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PreJogo />} />
        <Route path="/jogo/:userName" element={<Jogo />} />
      </Routes>
    </>
  );
}

export default App;
