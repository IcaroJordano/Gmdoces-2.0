import { useState } from "react";

import { Apresentacao } from "./Apresentacao"
import { CardPreview } from "./CardPreview"
import { Header } from "./Header"
import { NavBar } from "./NavBar"

import {register} from 'swiper/element/bundle'
import { Categorys } from "./Categorys";
import { Footer } from "./Footer";
register()

function App() {
  const [cardVisibilit,setCarvisibilit]=useState(true)
  return (
    <div className="bg-neutral-50 h-screen">
      <CardPreview setCarvisibilit={setCarvisibilit} cardVisibilit={cardVisibilit}></CardPreview>
      <NavBar cardVisibilit={cardVisibilit}></NavBar>
      <Header></Header>
      <Apresentacao></Apresentacao>
      <Categorys></Categorys>
      <Footer></Footer>
    </div>
  )
}

export default App
