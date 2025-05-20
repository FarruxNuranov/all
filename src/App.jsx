import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Page1/LandingPage";
import Telegram from "./pages/Telegram";
import "./styles/main.scss";
import LandingPage2 from "./components/Page2/LandingPage2";
import Telegram2 from "./pages/Telegram2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/telegram" element={<Telegram />} />
        <Route path="/page2/telegram" element={<Telegram2 />} />
        <Route path="/page2" element={<LandingPage2 />} />
      </Routes>
    </>
  );
}

export default App;
