import { BrowserRouter as Router} from "react-router-dom";


import { useState } from "react";

import { CardPreview } from "./Components/CardPreview"
import { Header } from "./Components/Header"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer";

import { register } from 'swiper/element/bundle'
import { Rotas } from "./Components/Rotas";
register()

function App() {
  const [cardVisibilit, setCarvisibilit] = useState(true)
  return (
    <Router className="bg-neutral-50 h-screen">
      <CardPreview setCarvisibilit={setCarvisibilit} cardVisibilit={cardVisibilit}></CardPreview>
      <Header></Header>
      <Rotas></Rotas>
      <Footer></Footer>
      <NavBar cardVisibilit={cardVisibilit}></NavBar>
    </Router>
  )
}

export default App
