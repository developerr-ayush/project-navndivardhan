import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
