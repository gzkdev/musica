import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Collections from "./pages/Collections";
import { Navbar } from "./components";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
