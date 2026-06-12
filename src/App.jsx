import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reproductor } from "./Components/Reproductor";
/* import Header from "./Pages/Header";
import LoadingPage from "./Pages/LoadingPage";
import Chapters from "./Pages/Chapters";
import Characters from "./Pages/Characters";
import Synopsis from "./Pages/Synopsis";
import Footer from "./Pages/Footer";
import ChapterPlayer from "./Pages/ChapterPlayer"; */
import  {LottieNey}  from "./Components/LottieNey";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página principal */}
        <Route path="/" element={
          <>
          {/* <Reproductor/> */}
            {/* <Header />
          <LoadingPage/>
            <Chapters />
            <Characters />
            <Synopsis />
            <Footer /> */}
            <LottieNey/>
          </>
        } />

        {/* Página de cada capítulo */}
       {/*  <Route path="/capitulo/:id" element={<ChapterPlayer />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;