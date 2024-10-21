import { Routes, Route } from "react-router-dom"


import { Home } from "./Pages/Home";
import { Pedido } from "./Pages/Pedido";
import { Confeiteiras } from "./Pages/Confeiteiras";
import { Explorar } from "./Pages/Explorar";
import { Produtos } from "./Pages/Produtos";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/pedido" element={<Pedido></Pedido>}></Route>
            <Route path="/confeiteiras" element={<Confeiteiras></Confeiteiras>}></Route>
            <Route path="/explorar" element={<Explorar></Explorar>}></Route>
            <Route path="/produtos" element={<Produtos></Produtos>}></Route>
        </Routes>
    )
}