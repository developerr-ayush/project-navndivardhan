import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/not-found";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Loader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
