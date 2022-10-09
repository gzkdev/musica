import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopCharts from "./pages/TopCharts";
import Collections from "./pages/Collections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charts/:id" element={<TopCharts />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
