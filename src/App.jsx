import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


import { useState } from "react";

import { Apresentacao } from "./Components/Apresentacao"
import { CardPreview } from "./Components/CardPreview"
import { Header } from "./Components/Header"
import { NavBar } from "./Components/NavBar"
import { Footer } from "./Components/Footer";
import { Categorys } from "./Components/Categorys";

import { register } from 'swiper/element/bundle'
import { Home } from "./Pages/Home";
import { Pedido } from "./Pages/Pedido";
import { Confeiteiras } from "./Pages/Confeiteiras";
import { Explorar } from "./Pages/Explorar";
register()

function App() {
  const [cardVisibilit, setCarvisibilit] = useState(true)
  return (
    <Router className="bg-neutral-50 h-screen">
      <CardPreview setCarvisibilit={setCarvisibilit} cardVisibilit={cardVisibilit}></CardPreview>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pedido" element={<Pedido></Pedido>}></Route>
        <Route path="/confeiteiras" element={<Confeiteiras></Confeiteiras>}></Route>
        <Route path="/explorar" element={<Explorar></Explorar>}></Route>
      </Routes>
      <Footer></Footer>
      <NavBar cardVisibilit={cardVisibilit}></NavBar>
    </Router>
  )
}

export default App
