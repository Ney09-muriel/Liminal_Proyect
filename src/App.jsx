import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Chapters from "./Pages/Chapters";
import Characters from "./Pages/Characters";
import Synopsis from "./Pages/Synopsis";
import Footer from "./Pages/Footer";
import ChapterPlayer from "./Pages/ChapterPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página principal */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Chapters />
            <Characters />
            <Synopsis />
            <Footer />
          </>
        } />

        {/* Página de cada capítulo */}
        <Route path="/capitulo/:id" element={<ChapterPlayer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;