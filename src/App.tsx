import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Collections from "./pages/Collections";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts/:id" element={<Album />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
